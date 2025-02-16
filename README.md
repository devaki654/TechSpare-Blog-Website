# TechSpare Blog Website

## Description
TechSpare is a modern and responsive blog website that allows users to read, post, edit, and delete blogs. The website is built using **HTML, CSS, and Node.js (Express.js)** for backend functionality. MongoDB is used as the database to store blog content.

## Features
- User-friendly blog interface
- Create, Read, Update, and Delete (CRUD) blog posts
- Responsive design using CSS
- Backend powered by Node.js and Express.js
- MongoDB database for blog storage

## Tech Stack
- **Frontend**: HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/)

Install Node.js and npm (if not installed)
Make sure you have Node.js installed. You can check by runn

node -v
npm -v

2. Initialize a Node.js Project (Optional)

   npm init -y

Install Required Dependencies

npm install express multer mysql cors path fs dotenv

4. Start Your Server

   node server.js

### Steps to Set Up Locally
Install Mysql
https://dev.mysql.com/downloads/installer/
1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/TechSpare-Blog.git
   cd TechSpare-Blog
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add:
   ```env
   PORT=5000
  
   ```

4. **Run the application**
   ```sh
   npm start
   ```

5. Open your browser and visit: `http://localhost:5000`

## Project Structure
```
TechSpare-Blog/
│── public/          # Static assets (CSS, JS, images)
│── views/           # HTML templates (if using EJS or Pug)
│── routes/          # Express routes for handling requests
│── models/          # Mongoose models
│── server.js        # Main server file
│── package.json     # Project metadata and dependencies
│── .env             # Environment variables
```

## API Endpoints
| Method | Endpoint       | Description        |
|--------|--------------|--------------------|
| GET    | `/`          | Home page with blogs |
| GET    | `/blog/:id`  | View a single blog |
| POST   | `/blog`      | Create a new blog |
| PUT    | `/blog/:id`  | Update a blog post |
| DELETE | `/blog/:id`  | Delete a blog post |

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request

## License
This project is licensed under the **MIT License**.

## Contact
For questions, reach out at **your_email@example.com** or visit [GitHub](https://github.com/yourusername/).
