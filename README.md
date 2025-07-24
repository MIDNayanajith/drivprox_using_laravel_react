# DriveFox Project

A full-stack application built using **Laravel** (Backend) and **React with Bootstrap and CSS** (Frontend). This project includes user authentication and an admin dashboard.

---

## 🔗 Live URLs

| Page        | URL                           |
| ----------- | ----------------------------- |
| Home        | `http://localhost:3000`       |
| Login Page  | `http://localhost:3000/login` |
| Admin Panel | `http://localhost:3000/admin` |

Use the credentials below to log in as an admin.

---

## 🧑‍💼 Admin Credentials

```bash
Email: admin@example.com
Password: password123
(***These credentials are created using a database seeder***)

Backend Setup (Laravel)
----------
1.Navigate to backend project:

cd backend/backend

2.Install dependencies:

composer install

3.Copy .env and set it up:

cp .env.example .env

4.Generate app key:

php artisan key:generate

5.Run migrations and seeders:

php artisan migrate --seed

6.Start Laravel server:

php artisan serve


 Frontend Setup (React)
 --------

 1.Navigate to frontend project:

 cd frontend/frontend

 2.Install dependencies:

 npm install

 3.Start the development server:

 npm start



🛠 Features
Admin Login

React Bootstrap UI

RESTful API with Laravel

Password encryption with Laravel Hash

Seeder for creating default admin

Session and JWT configuration

Database-driven backend
```
