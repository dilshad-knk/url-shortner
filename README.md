# URL Shortener API

A simple and scalable URL shortener service built using Node.js, Express.js, and MongoDB.

This application takes a long URL and returns a shortened version. When the shortened URL is visited, it redirects to the original long URL. It also tracks the number of visits for each shortened URL.

## Features

- Shorten any valid URL
- Redirect from short URL to the original long URL
- Track number of visits (optional)
- Modular and scalable code structure
- MongoDB for persistent storage

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- Nanoid (for generating unique short codes)
- dotenv (for environment variable management)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- MongoDB (local or MongoDB Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root and add the following:
   ```env
   MONGO_URI=your-mongodb-connection-uri
   PORT=3000
   ```

4. Start the server:
   - For development:
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

## API Endpoints

### POST `/shorten`

Shortens a given URL.

- **Request Body:**
  ```json
  {
    "originalUrl": "https://example.com/very-long-url"
  }
  ```

- **Response:**
  ```json
  {
    "originalUrl": "https://example.com/very-long-url",
    "shortUrl": "http://localhost:3000/abc123"
  }
  ```

### GET `/:shortCode`

Redirects to the original URL associated with the `shortCode`.

- Example:  
  `GET http://localhost:3000/abc123`  
  Redirects to: `https://example.com/very-long-url`

## Project Structure

```
url-shortener/
├── src/
│   ├── config/        # Database connection setup
│   ├── controllers/   # Logic for handling requests
│   ├── models/        # Mongoose schema definitions
│   ├── routes/        # Express route definitions
│   ├── services/      # Business logic like short URL generation
│   └── app.js         # Express app setup
├── server.js          # Entry point
├── .env               # Environment config
├── package.json       # Project metadata and scripts
```

## Scripts

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

- `npm start`: Starts the server
- `npm run dev`: Starts server with auto-reload using nodemon

## Environment Variables

Create a `.env` file and add:

```
MONGO_URI=your-mongodb-uri
PORT=3000
```

## License

This project is licensed for open and free usage.
