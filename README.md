# Project X - Inventory and Checkout System

A backend system built with Node.js and MongoDB to support multi-user inventory and checkout operations for marketplace enterprises.

## 🚀 Tech Stack

- **Backend**: Node.js (Express.js)
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT & Bcrypt
- **Documentation**: dbdiagram.io for ERD

## 📚 Entity Relationship Diagram (ERD)

Generated with [dbdiagram.io](https://dbdiagram.io/d/project-x-680294791ca52373f585ad80)

- **User** → One role
- **Role** → Many permissions
- **Permission** → Many-to-many with roles

## 🛠️ Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/Sammmy-dev/project-x
cd project-x
```

2. Install dependencies
```bash
npm install
```

3. Add your environment variables to `.env`
```env
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

4. Run the application
```bash
npm --watch app.js
```

---

## 📦 API Endpoints

### 🔐 Register Super Admin
**POST /api/auth/register**

Request Body:
```json
{
  "fullName": "John Doe",
  "companyName": "Shoprite",
  "email": "admin@example.com",
  "password": "securepassword"
}
```

### 🔓 Login (All Users)
**POST /api/auth/login**

Request Body:
```json
{
  "email": "admin@example.com",
  "password": "securepassword"
}
```

Response:
```json
{
  "token": "<JWT_TOKEN>",
  "user": {
    "_id": "...",
    "fullName": "...",
    "email": "...",
    "role": { "name": "super_admin" }
  }
}
```

### 👥 Add New User (Super Admin only)
**POST /api/users/add**

Request Body:
```json
{
  "fullName": "Jane User",
  "email": "jane@example.com",
  "roleName": "inventory_manager"
}
```

Response:
```json
{
  "message": "User added successfully"
}
```

---

## ✍️ Author

Ajiboye Samuel (https://github.com/Sammmy-dev)

---

