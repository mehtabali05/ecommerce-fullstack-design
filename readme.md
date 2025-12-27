# 🛒 Ecommerce Fullstack Application (MERN)

A full-stack eCommerce web application built using the **MERN stack**.  
The project is structured into **three separate applications**:

1. **Frontend** – User-facing app (React + Tailwind CSS)
2. **Admin Panel** – Admin dashboard (React + Bootstrap)
3. **Backend API** – Server (Node.js + Express + MongoDB)

⚠️ **Order functionality is NOT implemented yet** (planned for future updates).

---

## 📁 Project Structure

```

ecommerce-fullstack-design/
│
├── frontend/        # User-facing frontend (React + Tailwind CSS)
├── admin/           # Admin dashboard (React + Bootstrap)
├── backend/         # Backend API (Node.js + Express)
└── README.md

````

---

## 🚀 Tech Stack

### Frontend (User App)
- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Context API
- React Hot Toast

### Admin Panel
- React
- Vite
- Bootstrap
- React Router DOM
- Axios
- Context API

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Cookie-based Admin Auth
- dotenv
- CORS

---

## ✨ Features Implemented

### 👤 User (Frontend)
- User authentication (Register / Login)
- Browse products
- View product details
- Category filtering
- Cart UI (basic)
- Responsive UI with Tailwind CSS

### 🛠️ Admin Panel
- Admin authentication
- Protected admin routes
- Create / update / delete products
- Create / manage categories
- View users
- Admin-only access control

### ⚙️ Backend
- RESTful API architecture
- JWT-based authentication
- Admin authorization middleware
- Secure HTTP-only cookies
- Product image upload & retrieval
- MongoDB integration

---

## ❌ Not Implemented Yet

- Order placement
- Payment gateway
- Order history
- Checkout workflow

> These features are planned for future updates.

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=admin123
NODE_ENV=development
````

### Frontend & Admin (`.env`)

```env
VITE_API=http://localhost:5000
```

⚠️ Restart servers after modifying `.env` files.

---

## ▶️ How to Run the Project (Development)

You must run **three terminals**.

### 1️⃣ Backend Server

```bash
cd backend
npm install
npm run dev
```

### 2️⃣ Frontend (User App)

```bash
cd frontend
npm install
npm run dev
```

### 3️⃣ Admin Panel

```bash
cd admin
npm install
npm run dev
```

---

## 🌐 Default URLs

| Application | URL                                                                |
| ----------- | ------------------------------------------------------------------ |
| Backend API | [http://localhost:5000](http://localhost:5000)                     |
| Frontend    | [http://localhost:5173](http://localhost:5173)                     |
| Admin Panel | [http://localhost:5174](http://localhost:5174) |

---

## 🔐 Admin Login (Default)

```
Email: admin@gmail.com
Password: admin123
```

You can change these credentials in the backend `.env` file.

---

## 🧪 Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
```

---

## 🛠️ Common Issues & Solutions

### ❌ `process is not defined`

✔ Use:

```js
import.meta.env.VITE_API
```

❌ Do NOT use:

```js
process.env.VITE_API
```

---

### ❌ Admin stuck on spinner

✔ Ensure:

* Cookies are sent using `withCredentials: true`
* Admin route renders `<Outlet />`
* Correct Vite env variable usage

---

## 📌 Notes

* This project is for **learning and portfolio purposes**
* Admin authentication is cookie-based
* Clean separation of frontend, admin, and backend
* Built with scalability in mind

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Mehtab Ali**
GitHub: [https://github.com/mehtabali05](https://github.com/mehtabali05)

---

⭐ If you find this project helpful, please consider giving it a star!

```
