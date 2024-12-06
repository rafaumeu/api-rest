# REST API with Node.js 🚀

![Node.js](https://img.shields.io/badge/Node.js-v16.0.0-green)
![Express](https://img.shields.io/badge/Express-v4.19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.5.4-blueviolet)
![License](https://img.shields.io/badge/License-ISC-blue)

## Description

This project is a REST API developed with Node.js and Express, enabling the creation and management of products. The API is built using TypeScript, ensuring more robust and maintainable code.

## Technologies Used 🛠️

- **Node.js**: Runtime environment for server-side JavaScript.
- **Express**: Web framework for Node.js, simplifying API development.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **tsx**: A tool for running TypeScript files directly.

## Project Structure 📁

```
api-rest/
├── src/
│   ├── controllers/
│   │   └── ProductsController.ts
│   ├── middlewares/
│   │   └── my-middleware.ts
│   ├── routes/
│   │   ├── index.ts
│   │   └── product-routes.ts
│   ├── types/
│   │   └── request.d.ts
│   └── server.ts
├── package.json
└── tsconfig.json
```

## Installation ⚙️

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/api-rest.git
   cd api-rest
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Scripts 📝

- **`dev`**: Starts the server in development mode.

   ```bash
   npm run dev
   ```

## Endpoints 📡

### Products

#### `GET /products/:id/:user`

Returns information about a specific product.

**Parameters:**

- `id`: Product ID.
- `user`: User ID.

#### `POST /products`

Creates a new product.

**Request Body:**

```json
{
  "name": "Product Name",
  "price": 100
}
```

## Middleware 🛡️

The `myMiddleware` middleware is used to add `user_id` to the request, allowing it to be accessed in other parts of the application.

## Contribution 🤝

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License 📜

This project is licensed under the ISC License. See the LICENSE file for details.
