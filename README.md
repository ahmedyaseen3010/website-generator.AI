# Website Ideas Project

This repository contains two main projects:

- **website-generator-api**: A NestJS backend API for managing website ideas and sections, using MongoDB.
- **website-ideas-frontend**: A Next.js frontend for submitting and viewing website ideas.

---

## Prerequisites

- Node.js (version 14 or later)
- npm or yarn
- MongoDB (for backend)

---

## 1. Backend: website-generator-api

### Setup

1. Navigate to the backend directory:
   ```
   cd website-generator-api
   ```
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
3. Configure environment variables in `.env` (see `.env.example` if available).

### Running the Backend

Start the NestJS server:
```
npm run start:dev
```
or
```
yarn start:dev
```
The API will be available at `http://localhost:3001` (or the port specified in your `.env`).

---

## 2. Frontend: website-ideas-frontend

### Setup

1. Navigate to the frontend directory:
   ```
   cd website-ideas-frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Running the Frontend

Start the Next.js development server:
```
npm run dev
```
or
```
yarn dev
```
The app will be available at `http://localhost:3000`.

### API Integration

Ensure the backend is running and accessible. Update the API endpoint in [`src/services/api.ts`](website-ideas-frontend/src/services/api.ts) if necessary.

---

## Project Structure

- `website-generator-api/`: NestJS backend API
- `website-ideas-frontend/`: Next.js frontend
