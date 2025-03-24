# 🎵 Spotify Clone (Full-Stack)

A **Spotify-like music streaming app** built with **HTML, CSS, JavaScript (Frontend)** and **Node.js, Express.js, MongoDB (Backend)**. The app includes **user authentication (JWT-based)**, music listing, and secure API endpoints.

---

## 🚀 Features

✅ User Registration & Login (JWT Authentication)  
✅ Secure Token-Based Access  
✅ MongoDB Database for Users & Songs  
✅ RESTful API for Music Data  
✅ Responsive UI with HTML, CSS, JavaScript  
✅ CORS Support for Frontend-Backend Communication  

---

## 📂 Project Structure

spotify-clone/ │── backend/ │ │── server.js
│ │── config/
│ │ ├── db.js
│ │── models/
│ │ ├── songModel.js
│ │ ├── userModel.js
│ │── routes/
│ │ ├── songRoutes.js
│ │ ├── userRoutes.js
│ │── middleware/
│ │ ├── authMiddleware.js
│ │── package.json
│ │── .env
│── frontend/ │ │── index.html
│ │── style.css
│ │── script.js
│── README.md


---

## 🔧 Installation & Setup

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/yourusername/spotify-clone.git
cd spotify-clone
cd backend
npm install

Create a .env file inside the backend/ folder and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the backend server:

npm start

Runs on http://localhost:5000

3️⃣ Frontend Setup
Simply open frontend/index.html in a browser.

🎯 API Endpoints
📌 User Authentication
✅ Register: POST /api/users/register

Request Body:
json
Copy
Edit
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
✅ Login: POST /api/users/login

Request Body:
json
Copy
Edit
{
  "email": "john@example.com",
  "password": "123456"
}
Response:
json
Copy
Edit
{
  "token": "your_generated_jwt_token"
}
📌 Music API (Protected)
✅ Get Songs: GET /api/songs/
🔐 Requires JWT Token in headers:

sh
Copy
Edit

Authorization: Bearer your_jwt_token
✨ Future Improvements
🎶 Add Playlists Feature

🎵 Song Upload Support

🎨 Improve UI with React.js

📱 Mobile-Responsive Design

🛠 Built With
Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js, MongoDB

Authentication: JWT (JSON Web Tokens)

Database: MongoDB

