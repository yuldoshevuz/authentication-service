# Authentication Service

This project is a simple authentication service implemented using Node.js, Express, and JWT. It includes unit tests written with Mocha and Chai.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project provides an API for user authentication. It allows users to register, log in, and access protected routes using JWT-based authentication.

## Features
- User registration
- User login with JWT token generation
- Protected route access with valid JWT token
- Unit tests for registration, login, and protected routes

## Installation
Clone the repository:
```bash
git clone https://github.com/your-username/authentication-service.git
cd authentication-service
```
Install dependencies:
```bash
npm install
```

## Usage
Start the server:

```bash
npm start
```

The server will run on port 5001 by default. You can access it at http://localhost:{PORT}.

## Testing
To run the tests, use the following command:

```bash
npm test
```

## API Endpoints
### POST /register

- *Description*: Register a new user
- *Request Body:*
```json
{
  "fullName": "John Doe",
  "email": "johndoe@gmail.com",
  "password": "password123"
}
```
- Response:

    - *Status:* 201 Created
    - *Body:*

```json
{
  "ok": true,
  "data": {
    "id": "user-id",
    "fullName": "John Doe",
    "email": "johndoe@gmail.com"
  }
}
```

### POST /login
*Description:* Login a user and return a JWT token
*Request Body:*
```json
{
  "email": "johndoe@gmail.com",
  "password": "password123"
}
```
- *Response:*
    - *Status:* 200 OK
    - *Body:*

```json
{
  "ok": true,
  "data": {
    "id": 1,
    "fullName": "John Doe",
    "email": "johndoe@gmail.com",
    "token": "your-jwt-token"
  }
}
```

### GET /protected
- *Description:* Access a protected route
- *Headers:* ``Authorization: Bearer <JWT token>``
- *Response:*
    - *Status:* 200 OK
    - *Body:*

```json
{
  "ok": true,
    "data": {
        "id": 1,
        "fullName": "John Doe",
        "email": "johndoe@gmail.com",
        "password": "password123",
        "createdAt": `"<created-time>"`,
        "updatedAt": `"<updated-time>"`
    }
}
```
## Project Structure
```bash
authentication-service/
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── error.controller.js
│   │   └── protected.controller.js
│   ├── routes/
│   │   └── index.js
│   ├── middlewares/
│   │   └── auth.middleware.js
│   ├── services/
│   │   └── auth.service.js
│   ├── helpers/
│   │   └── logger.js
│   ├── models/
│   │   └── user.model.js
│   ├── index.js
│   └── config/
│   │   ├── connect.db.js
│   │   ├── db.config.js
│   │   └── environments.js
│   ├── test/
│   │   ├── login.test.js
│   │   ├── protected.test.js
│   │   └── index.js
├── .env
├── .example.env
├── .gitignore
├── .babel.config.js
├── package.json
└── README.md
```

## Contributing
1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature-branch).
6. Open a pull request.

# License
This project is licensed under the MIT License. See the LICENSE file for details.