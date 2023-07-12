# TechLine E-commerce Web Application

## Description

TechLine is a full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides a user-friendly interface for customers to browse and purchase technology products online. This README file provides an overview of the application's features, installation instructions, and important details.
![home page](https://github.com/prathameshpatil7/TechLine-MERN-Stack/assets/75564009/5badb205-7f19-435a-9ba1-28f7aaa73ee0)
![product](https://github.com/prathameshpatil7/TechLine-MERN-Stack/assets/75564009/1c98d10d-d6a1-43c6-bda4-8a625ed23396)
![login](https://github.com/prathameshpatil7/TechLine-MERN-Stack/assets/75564009/b03a799b-781b-4254-b791-5b1129433cd3)
![register](https://github.com/prathameshpatil7/TechLine-MERN-Stack/assets/75564009/96b27aea-bd4b-4a70-9d87-68463eb1390f)
![product](https://github.com/prathameshpatil7/TechLine-MERN-Stack/assets/75564009/1c98d10d-d6a1-43c6-bda4-8a625ed23396)
![search-results](https://github.com/prathameshpatil7/TechLine-MERN-Stack/assets/75564009/667130a4-28d9-4c07-bb83-1e262d15d603)
![category](https://github.com/prathameshpatil7/TechLine-MERN-Stack/assets/75564009/3d1f8797-c5fa-45e4-908c-fb06381032a8)
## Features

- User registration and authentication
- Product catalog with search and filtering options
- Product details page with description, images.
- Shopping cart functionality
- Secure checkout process
- Order history and tracking
- User profile management
- Admin panel for managing products, categories, and orders
- Payment integration (e.g., Braintree)
- Responsive design for mobile and desktop devices

## Technologies Used

- MongoDB: NoSQL database for storing product, user, and order data.
- Express.js: Backend framework for handling HTTP requests and routing.
- React.js: Frontend library for building user interfaces.
- Node.js: JavaScript runtime environment for server-side development.
- Context-API: State management library for handling application state.
- Bootstrap: UI component library for designing responsive and visually appealing interfaces.
- Braintree: Payment processing platform for secure and reliable transactions.
- JSON Web Tokens (JWT): Authentication method for securing user sessions.
- Bcrypt: Password hashing library for securely storing user passwords.
- Axios: HTTP client for making API requests from the front end.

## Installation

To run the TechLine e-commerce web application locally, please follow these steps:

### Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your system.

### Backend Setup

1. Clone the repository from GitHub:

   ```shell
   git clone https://github.com/your-username/TechLine.git
2. Navigate to the project's backend directory:
    ```shell
    cd TechLine-MERN-Stack/
3. Install the required dependencies:
   ```shell
    npm install
 
4. Create a `.env` file in the current directory and configure the following environment variables:
    ```shell
    PORT=3001
    MONGO_URI=<your MongoDB connection string>
    JWT_SECRET=<your JWT secret key>
    BRAINTREE_MERCHANT_ID = <your Stripe merchant ID>
    BRAINTREE_PUBLIC_KEY = <your Stripe public key>
    BRAINTREE_PRIVATE_KEY = <your Stripe private key>
    DEV_MODE = Development
    
5. Navigate to the project's client(Frontend) directory:
    ```shell
    cd client/
    
6. Start the Project:
   ```shell
   npm run dev

## Usage
Once the backend server and frontend development server are running, you can access the TechLine application by opening your web browser and visiting http://localhost:3001.


