
# Express.js Restaurant API

This project is a simple RESTful API built with Express.js. It includes basic CRUD operations for managing a list of restaurants and serves Swagger documentation to interact with the API.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Swagger Documentation](#swagger-documentation)
- [Dependencies](#dependencies)
- [License](#license)

## Project Overview

This project provides an API to manage a list of restaurants. It includes endpoints for retrieving and adding restaurants. The API is documented using Swagger UI, allowing easy interaction and testing of the endpoints.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mabass2110/Restaurant-API 
    cd <repository-directory>
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm start
    ```

   The server will be running at `http://localhost:3000`.

### Configuration

Ensure that you have a valid Swagger specification file at `./swagger.js`. The Swagger spec defines the API documentation.

## API Endpoints

### GET `/restaurants`

Retrieve the list of all restaurants.

**Response:**

- Status: `200 OK`
- Body: An array of restaurant objects.

**Example:**

```json
[
  { "id": 0, "name": "Burako da Velha" },
  { "id": 1, "name": "South Beach" },
  { "id": 3, "name": "Cais66" }
]
```

### POST `/restaurant`

Add a new restaurant to the list.

**Request Body:**

- `id` (number): The ID of the restaurant.
- `name` (string): The name of the restaurant.

**Response:**

- Status: `201 Created` on successful creation.
- Status: `400 Bad Request` if the input is invalid.

**Example Request Body:**

```json
{
  "id": 4,
  "name": "New Restaurant"
}
```

**Example Response (Success):**

```json
{
  "status": 201,
  "message": "Restaurant successfully created"
}
```

**Example Response (Error):**

```json
{
  "status": 400,
  "message": "Select a valid name and id."
}
```

## Swagger Documentation

To view and interact with the API documentation:

1. Open a web browser and navigate to `http://localhost:3000/api-docs`.

   This will display the Swagger UI with interactive documentation for the API endpoints.

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `swagger-ui-express`: Middleware to serve Swagger UI.
- `body-parser`: Middleware for parsing incoming request bodies.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

