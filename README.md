# Cat API Backend

A comprehensive REST API backend for cat breed information and user management, built with Node.js, Express, and TypeScript. This application integrates with The Cat API to provide breed data and supports user authentication.

## Features

- 🐱 **Cat Breed Management**: Retrieve, search, and explore cat breeds
- 🖼️ **Image Integration**: Get images for specific cat breeds
- 👤 **User Authentication**: Register and login functionality
- 🔒 **Security**: Password hashing with bcrypt
- 📊 **Database**: MongoDB integration with Mongoose
- 🧪 **Testing**: Jest test suite with mocks
- 📝 **TypeScript**: Full type safety throughout the codebase

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: bcrypt for password hashing
- **External API**: The Cat API
- **Testing**: Jest with Supertest
- **Development**: ts-node-dev for hot reloading

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 18 or higher)
- npm or yarn package manager
- MongoDB database
- Git

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd cat-api-backend-main
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Setup:**
   Copy the example environment file and configure your variables:

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your configuration:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/cat-api
   CAT_API_KEY=your_cat_api_key_here
   ```

## Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PORT` | Server port | No | 3000 |
| `MONGO_URI` | MongoDB connection string | Yes | - |
| `CAT_API_KEY` | API key for The Cat API | Yes | - |

### Getting a Cat API Key

1. Visit [The Cat API](https://thecatapi.com/)
2. Sign up for a free account
3. Generate an API key in your dashboard
4. Add the key to your `.env` file

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm run build
npm start
```

The server will start on `http://localhost:3000` (or your configured PORT).

## API Documentation

### Base URL

```bash
http://localhost:3000/api
```

### Endpoints

#### Cat Breeds

- **GET /breeds**
  - Get all cat breeds
  - Response: Array of breed objects

- **GET /breeds/:breed_id**
  - Get a specific breed by ID
  - Parameters: `breed_id` (string)
  - Response: Breed object

- **GET /breeds/search/:q**
  - Search breeds by query
  - Parameters: `q` (string) - search query
  - Response: Array of matching breeds

#### Images

- **GET /imagesbybreedid?breed_id={id}**
  - Get images for a specific breed
  - Query Parameters: `breed_id` (string)
  - Response: Array of image objects

#### User Authentication

- **POST /login**
  - User login
  - Body:

    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

  - Response: User object (on success) or error message

- **POST /register**
  - User registration
  - Body:

    ```json
    {
      "name": "string",
      "identification": "string",
      "email": "string",
      "age": "number",
      "username": "string",
      "password": "string"
    }
    ```

  - Response: Created user object

## Testing

Run the test suite:

```bash
npm test
```

The tests include:

- Unit tests for controllers and services
- Integration tests for API endpoints
- Mock implementations for external dependencies

## Project Structure

```md
src/
├── app.ts                 # Main application entry point
├── config/
│   └── db.ts             # Database configuration
├── controllers/          # Route handlers
│   ├── cats.controller.ts
│   ├── images.controller.ts
│   └── users.controller.ts
├── models/               # Mongoose models
│   └── user.model.ts
├── routes/               # API routes
│   └── index.ts
├── services/             # Business logic
│   ├── cats.service.ts
│   ├── images.service.ts
│   └── user.service.ts
└── tests/                # Test files
    ├── cats.controller.test.ts
    ├── images.controller.test.ts
    ├── user.service.test.ts
    └── __mocks__/

```

## Development

### Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Use JSDoc comments for documentation
- Maintain consistent code formatting

### Adding New Features

1. Create appropriate controllers, services, and models
2. Add routes in `src/routes/index.ts`
3. Write tests for new functionality
4. Update this README with new endpoints

## Docker Support

Build and run with Docker:

```bash
# Build the image
docker build -t cat-api-backend .

# Run the container
docker run -p 3000:3000 --env-file .env cat-api-backend
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [The Cat API](https://thecatapi.com/) for providing cat breed data
- [Express.js](https://expressjs.com/) for the web framework
- [Mongoose](https://mongoosejs.com/) for MongoDB integration
