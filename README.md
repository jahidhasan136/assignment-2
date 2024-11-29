<h1>Stationary Shop</h1>

# About:
<p>The Stationery Shop application is a simple and efficient system for managing stationery products and customer orders. Built with Express and TypeScript, it uses MongoDB and Mongoose to handle the database and ensure data accuracy with validation. The project provides a reliable backend for inventory management and order processing, with easy-to-use and well-organized APIs.</p>

# Key Features:

# Product Management:-
1. Implement crud operations like Add, Read, Update, retrieve, and delete a product.
2. Data include name, brand, price, category, description, quantity, and inStock status.
3. Enum-based and other validations add.

# Order Management:-
1. Customers can place orders for available products.
2. Customers see the total revenue of their orders.

# Validation & Error Handling:-
1. Mongoose schema validation is used to ensure data integrity.
2. Generic error response with detailed message and error object.

# Revenue Calculation:-
1. The aggregate pipeline in MongoDB is used to compute the total revenue from all orders.
