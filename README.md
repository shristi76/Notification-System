#  NotifyHub

A full-stack **Notification-as-a-Service (NaaS)** application built with **React, Node.js, Express.js, and PostgreSQL**.

NotifyHub allows users to register, log in securely using JWT authentication, send email notifications, and view their notification history through a clean dashboard.

---



## Features

-  User Registration
-  User Login with JWT Authentication
-  Send Email Notifications
-  Store Notification History
-  View Notification History
-  Protected API Routes
-  React Frontend
-  RESTful APIs
-  PostgreSQL Database
-  MVC Architecture

---

##  Tech Stack

### Frontend

- React
- React Router DOM
- Axios
- CSS

### Backend

- Node.js
- Express.js
- PostgreSQL
- JWT (JSON Web Token)
- bcrypt
- Nodemailer
- dotenv

---

##  Project Structure

```
notifyhub
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── src
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   └── server.js
│
├── sql
│
├── .env.example
├── package.json
└── README.md
```

---

#  Installation

## 1. Clone the repository

```bash
git clone https://github.com/shristi76/notifyhub.git
```

```
cd notifyhub
```

---

## 2. Install Backend Dependencies

```bash
npm install
```

---

## 3. Install Frontend Dependencies

```bash
cd frontend

npm install
```

---

## 4. Create PostgreSQL Database

Create a database named

```
notification_db
```

Run the SQL script located inside the **sql** folder.

---

## 5. Configure Environment Variables

Create a `.env` file in the project root.

Example:

```env
PORT=5000

DATABASE_URL=postgres://username:password@localhost:5432/notification_db

JWT_SECRET=your_secret_key

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_gmail_app_password
```

> **Important:** Use your own Gmail account and App Password.
> Never upload your `.env` file to GitHub.

---

## 6. Start Backend

```bash
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

## 7. Start Frontend

```bash
cd frontend

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

#  Authentication

After login, the backend returns a JWT token.

The frontend stores it in Local Storage.

Every protected API request includes:

```
Authorization: Bearer <token>
```

---

#  API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |

---

## Notifications

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/notifications/send` | Send Notification |
| GET | `/api/notifications` | Get Notification History |

---

#  Database Schema

## users

| Column | Type |
|---------|------|
| id | SERIAL |
| name | VARCHAR |
| email | VARCHAR |
| password | VARCHAR |

---

## notifications

| Column | Type |
|---------|------|
| id | SERIAL |
| user_id | INTEGER |
| recipient | VARCHAR |
| subject | VARCHAR |
| message | TEXT |
| type | VARCHAR |
| status | VARCHAR |
| created_at | TIMESTAMP |

---

#  Architecture

```
React Frontend
       │
       ▼
Express REST API
       │
       ▼
Controllers
       │
       ▼
Models
       │
       ▼
PostgreSQL
```

---

#  What I Learned

During this project, I learned:

- Building REST APIs
- JWT Authentication
- Password Hashing using bcrypt
- PostgreSQL CRUD Operations
- MVC Architecture
- React Components
- React Router
- Axios API Integration
- Full Stack Development
- Environment Variables
- Nodemailer Integration

---

### License
This project is licensed under the MIT License

