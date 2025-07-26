# Website Ideas Generator 🚀

A full-stack application for generating and managing website ideas with contextual content generation. Built with NestJS backend and Next.js frontend.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [MongoDB Setup](#mongodb-setup)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Testing](#testing)
- [Development Workflow](#development-workflow)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

This repository contains two main components:

| Component | Technology | Description |
|-----------|------------|-------------|
| **Backend API** | NestJS + MongoDB | Manages website ideas and sections with contextual content generation |
| **Frontend** | Next.js | User interface for submitting and viewing website ideas |

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or later) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Docker** - [Download here](https://www.docker.com/get-started)

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahmedyaseen3010/website-generator.AI.git
   cd website-generator.AI
   ```

2. **Start MongoDB**
   ```bash
   docker run --name mongodb -d -p 27017:27017 mongo:latest
   ```

3. **Setup and start backend**
   ```bash
   cd website-generator-api
   npm install
   npm run start
   ```

4. **Setup and start frontend** (in a new terminal)
   ```bash
   cd website-ideas-frontend
   npm install
   npm run dev
   ```

5. **Access the application**
   - 🌐 Frontend: http://localhost:3000
   - 🔧 Backend API: http://localhost:3001

## 🗄️ MongoDB Setup

### Using Docker (Recommended)

**Start MongoDB container:**
```bash
# First time setup
docker run --name mongodb -d -p 27017:27017 mongo:latest

# Start existing container
docker start mongodb

# Stop container
docker stop mongodb
```

**Connection Details:**
- **URL:** `mongodb://localhost:27017`
- **Port:** `27017`
- **Container Name:** `mongodb`

### Alternative: Local Installation
If you prefer not to use Docker, you can install MongoDB locally by following the [official installation guide](https://docs.mongodb.com/manual/installation/).

## 🔧 Backend Setup

### Installation

1. **Navigate to backend directory:**
   ```bash
   cd website-generator-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Backend

**Development mode:**
```bash
npm run start:dev
# or
yarn start:dev
```

**Production mode:**
```bash
npm run build
npm run start:prod
```

The API will be available at `http://localhost:3001`


## 🎨 Frontend Setup

### Installation

1. **Navigate to frontend directory:**
   ```bash
   cd website-ideas-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

### Configuration

Update the API endpoint in `src/services/api.ts` if your backend runs on a different port:

```typescript
const API_BASE_URL = 'http://localhost:3001'; // Update if needed
```

### Running the Frontend

**Development mode:**
```bash
npm run dev
# or
yarn dev
```

**Production build:**
```bash
npm run build
npm run start
```

The application will be available at `http://localhost:3000`

## 🧪 Testing

### Content Generation Testing Prompts

Use these prompts to test the contextual content generation feature:

#### 🍽️ Food & Restaurant Testing
- "artisan bakery"
- "Italian restaurant"
- "food truck business"
- "organic bakery cafe"
- "seafood restaurant chain"
- "vegan food delivery"
- "bakery and restaurant combo"

#### 💻 Tech & Software Testing
- "mobile app development"
- "SaaS software platform"
- "tech startup incubator"
- "AI software solutions"
- "app for fitness tracking"
- "software consulting firm"
- "tech innovation lab"

#### 👤 Portfolio & Personal Testing
- "personal portfolio website"
- "freelance designer portfolio"
- "personal brand consulting"
- "photographer portfolio"
- "personal finance blog"
- "creative portfolio showcase"

#### 🛍️ E-commerce & Shopping Testing
- "online clothing store"
- "ecommerce marketplace"
- "handmade crafts shop"
- "electronics store online"
- "boutique fashion shop"
- "vintage furniture store"
- "sports equipment ecommerce"

#### 🔄 Edge Cases & Generic Testing
- "consulting services" *(should trigger generic)*
- "fitness gym" *(should trigger generic)*
- "law firm" *(should trigger generic)*
- "beauty salon" *(should trigger generic)*
- "real estate agency" *(should trigger generic)*

#### 🤔 Mixed/Ambiguous Cases
- "restaurant app" *(contains both food and app keywords)*
- "bakery software" *(contains both bakery and software)*
- "tech food startup" *(multiple categories)*
- "personal ecommerce store" *(multiple categories)*

#### 📝 Additional Test Cases
- **Capitalization:** "BAKERY", "Tech Startup", "ECOMMERCE STORE"
- **Single Words:** "bakery", "tech", "portfolio", "shop", "app"
- **Empty/Special:** "", " ", "tech-startup", "bakery & cafe"

## 🔄 Development Workflow

### Daily Development Setup

1. **Start MongoDB:**
   ```bash
   docker start mongodb
   ```

2. **Start Backend (Terminal 1):**
   ```bash
   cd website-generator-api
   npm run start:dev
   ```

3. **Start Frontend (Terminal 2):**
   ```bash
   cd website-ideas-frontend
   npm run dev
   ```

4. **Access Applications:**
   - 🌐 **Frontend:** http://localhost:3000
   - 🔧 **Backend API:** http://localhost:3001
   - 🗄️ **MongoDB:** mongodb://localhost:27017


## 🔧 Troubleshooting

### Common Issues

**MongoDB Connection Error:**
```bash
# Check if MongoDB container is running
docker ps

# Start MongoDB if not running
docker start mongodb

# Check MongoDB logs
docker logs mongodb
```

**Port Already in Use:**
```bash
# Find process using port 3000 or 3001
lsof -i :3000
lsof -i :3001

```

**Frontend API Connection Issues:**
- Verify backend is running on correct port
- Check `src/services/api.ts` for correct API URL


### Getting Help

If you encounter issues not covered here:

1. Check the console logs for error messages
2. Verify all prerequisites are installed correctly
3. Ensure all services are running on the correct ports

