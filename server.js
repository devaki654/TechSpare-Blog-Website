const express = require("express");
const multer = require("multer");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// MySQL Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",  // Update with your database user
    password: "12345",   // Update with your database password
    database: "blogDB"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL database.");
    }
});

// Dummy Users (For Authentication)
const users = [
    { username: "admin", password: "password123" },
    { username: "user1", password: "mypassword" }
];

// Login Route
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true, message: "Login successful" });
    } else {
        res.status(401).json({ success: false, message: "Invalid username or password" });
    }
});

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, "public/uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Upload Route
app.post("/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const contentText = req.body.content || "No description";
    const imagePath = `uploads/${req.file.filename}`;

    // Insert into MySQL
    const sql = "INSERT INTO blogs (content, image_path) VALUES (?, ?)";
    db.query(sql, [contentText, imagePath], (err, result) => {
        if (err) {
            console.error("Insert error:", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json({ 
            message: "Upload successful", 
            data: { id: result.insertId, text_content: contentText, image_path: imagePath } 
        });
    });
});

// Fetch Uploaded Blogs
app.get("/contents", (req, res) => {
    const sql = "SELECT * FROM blogs ORDER BY id DESC";
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Fetch error:", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json(results);
    });
});

// Serve Uploaded Images Correctly
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
