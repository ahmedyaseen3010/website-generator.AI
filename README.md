# Website Ideas Project
This repository contains two main projects:
- **website-generator-api**: A NestJS backend API for managing website ideas and sections, using MongoDB.
- **website-ideas-frontend**: A Next.js frontend for submitting and viewing website ideas.

---

## Prerequisites
- Node.js (version 14 or later)
- npm or yarn
- Docker (for MongoDB)

---

## MongoDB Setup with Docker

This project uses MongoDB running in a Docker container. To set up MongoDB:

1. **Pull and run MongoDB Docker image:**
   ```bash
   docker run --name mongodb -d -p 27017:27017 mongo:latest
   ```


2. **To start an existing container:**
   ```bash
   docker start mongodb
   ```

3. **To stop the container:**
   ```bash
   docker stop mongodb
   ```

The MongoDB instance will be accessible at `mongodb://localhost:27017`.

---

## 1. Backend: website-generator-api

### Setup
1. Navigate to the backend directory:
   ```bash
   cd website-generator-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Configure environment variables in `.env` (see `.env.example` if available).
   - Ensure MongoDB connection string points to: `mongodb://localhost:27017/your-database-name`

### Running the Backend
Start the NestJS server:
```bash
npm run start:dev
```
or
```bash
yarn start:dev
```

The API will be available at `http://localhost:3001` (or the port specified in your `.env`).

---

## 2. Frontend: website-ideas-frontend

### Setup
1. Navigate to the frontend directory:
   ```bash
   cd website-ideas-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Frontend
Start the Next.js development server:
```bash
npm run dev
```
or
```bash
yarn dev
```

The app will be available at `http://localhost:3000`.

### API Integration
Ensure the backend is running and accessible. Update the API endpoint in [`src/services/api.ts`](website-ideas-frontend/src/services/api.ts) if necessary.

---

## Project Structure
- `website-generator-api/`: NestJS backend API
- `website-ideas-frontend/`: Next.js frontend

---

## Development Workflow

1. **Start MongoDB container:**
   ```bash
   docker start mongodb
   ```

2. **Start the backend API:**
   ```bash
   cd website-generator-api
   npm run start:dev
   ```

3. **Start the frontend (in a new terminal):**
   ```bash
   cd website-ideas-frontend
   npm run dev
   ```

4. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - MongoDB: mongodb://localhost:27017
