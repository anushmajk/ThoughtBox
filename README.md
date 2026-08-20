# 📝 ThoughtBox

A full-stack **MERN** note-taking application that allows users to securely create, organize, search, edit, and delete notes. ThoughtBox provides a clean, responsive interface with user authentication, making it an ideal project to showcase full-stack development skills.

🌐 **Live Demo:** https://thoughtbox-h0ir.onrender.com/

---

## 📖 Features

* 🔐 User Authentication (Register & Login)
* 📝 Create, Read, Update & Delete (CRUD) Notes
* 🔍 Search notes instantly
* 📱 Fully Responsive Design
* ⚡ Fast and intuitive user interface
* 🔒 Protected routes using JWT Authentication
* ☁️ MongoDB Atlas database integration

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcrypt.js

### Deployment

* Frontend: Render
* Backend: Render
* Database: MongoDB Atlas

---

## 📂 Project Structure

```text
ThoughtBox/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/ThoughtBox.git
cd ThoughtBox
```

### 2. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## ▶️ Run the Application

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm start
```

The application will be available at:

```
Frontend: http://localhost:3000

Backend: http://localhost:5000
```

---

## 🎯 Future Improvements

* 📌 Note categories
* ⭐ Favorite/Pinned notes
* 🌙 Dark Mode
* 🏷️ Tags
* 📂 Archive & Trash
* 📤 Export notes as PDF
* 🤝 Share notes with other users

---

## 📚 What I Learned

Building ThoughtBox helped me gain practical experience with:

* MERN Stack Development
* REST API Development
* MongoDB & Mongoose
* JWT Authentication
* CRUD Operations
* State Management in React
* Backend Routing & Middleware
* Full-Stack Deployment using Render

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📬 Contact

**GitHub:** https://github.com/anushmajk

If you like this project, consider giving it a ⭐ on GitHub!

---

## 📄 License

This project is licensed under the MIT License.
