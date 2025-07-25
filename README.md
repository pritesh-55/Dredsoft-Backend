# 🛍️ Product Catalog REST API

A RESTful API built with Node.js, Express, and MongoDB for managing a product catalog.

It allows you to:
- Fetch all products
- Filter products by category
- Get product details by ID
- Create a new product (optional)

Swagger UI is integrated for live API documentation.

---

## 🚀 Live API Docs

Swagger UI: http://localhost:5000/api-docs

---

## 🧰 Tech Stack

- Node.js – JavaScript runtime
- Express.js – Web framework
- MongoDB – NoSQL database
- Mongoose – ODM for MongoDB
- Jsonschema – Schema validation for incoming requests
- Swagger (OpenAPI 3.0) – API documentation

---

## 📂 Project Structure

src/
├── config/             # Database connection
├── controllers/        # Route logic
├── middlewares/        # (Optional custom middleware)
├── models/             # Mongoose schemas
├── routes/
│   ├── schema/         # Swagger annotations (optional)
│   └── postRoutes.js   # Product route definitions
├── utils/              # Swagger setup and helpers
├── app.js              # Express app setup
└── server.js           # Entry point

---

## 📦 Installation & Setup

1. Clone the repository:

   git clone https://github.com/pritesh-55/Dredsoft-Backend.git
   cd Dredsoft-Backend

2. Install dependencies:

   npm install

3. Create a .env file in the root directory:

   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/product_api

4. Run the server:

   npm start

---

## 📂 API Endpoints

Method | Endpoint              | Description
-------|------------------------|---------------------------------------
GET    | /products              | Get all products
GET    | /products/:id          | Get a product by ID
GET    | /products?category=xyz | Filter products by category
POST   | /products              | Create a new product

---

## 📘 Sample Requests

1. Get all products

   curl http://localhost:5000/products

2. Get products by category

   curl "http://localhost:5000/products?category=men's clothing"

3. Get product by ID

   curl http://localhost:5000/products/<productId>

4. Create a new product

   curl -X POST http://localhost:5000/products \
     -H "Content-Type: application/json" \
     -d '{
       "title": "Fjallraven Backpack",
       "price": 109.95,
       "description": "Perfect for everyday use and forest walks.",
       "category": "men's clothing",
       "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
       "rating": {
         "rate": 3.9,
         "count": 120
       }
     }'

---

## 🧾 Product Schema (JSON)

{
  "title": "string",
  "price": "number",
  "description": "string",
  "category": "string",
  "image": "string (URL)",
  "rating": {
    "rate": "number",
    "count": "number"
  }
}

---

## 🧪 API Testing Tools

You can test the API using:

- Swagger UI → http://localhost:5000/api-docs
- Postman
- CURL

---
