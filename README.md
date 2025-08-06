# Programming Hangman Game

A full-stack hangman game focused on programming concepts, built with React, Express.js, and MongoDB.

## Features

- 🎮 **Interactive Hangman Game** - Guess programming terms and code snippets
- 👥 **User Authentication** - Register, login, and secure user sessions
- 📊 **Score Tracking** - Track your game statistics and progress
- 🏆 **Leaderboard** - Compete with other players
- 📈 **Game History** - View your past games and performance
- 🎯 **Multiple Categories** - JavaScript, Python, Java, C++, and React
- 📱 **Responsive Design** - Works on desktop and mobile devices

## Tech Stack

### Frontend
- **React 18** with Hooks
- **Vite** for build tooling
- **TailwindCSS** for styling
- **Shadcn/ui** for UI components
- **React Router** for navigation
- **Lucide React** for icons

### Backend
- **Express.js** server
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **CORS** for cross-origin requests

## Prerequisites

Before running this application, make sure you have:

- **Node.js** (version 16 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn** package manager

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd coder-hangman-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   The `.env` file should already exist with the following variables:
   ```env
   # Server Configuration
   PORT=5000
   
   # MongoDB Connection
   MONGODB_URI=mongodb://localhost:27017/hangman-game
   
   # JWT Secret (change this to a secure random string in production)
   JWT_SECRET=your_super_secure_jwt_secret_key_change_in_production
   
   # Frontend URL (for CORS)
   FRONTEND_URL=http://localhost:5173
   ```

   **Important:** Change the `JWT_SECRET` to a secure random string in production!

## Running the Application

### Option 1: Manual Start (Recommended for Development)

1. **Start MongoDB:**
   - If using local MongoDB: Make sure MongoDB service is running
   - If using MongoDB Atlas: Update `MONGODB_URI` in `.env` with your connection string

2. **Start the backend server:**
   ```bash
   npm run server
   ```
   The server will start on `http://localhost:5000`

3. **In a new terminal, start the frontend:**
   ```bash
   npm run dev
   ```
   The frontend will start on `http://localhost:5173`

### Option 2: Development with Auto-reload

If you want auto-reload for the server during development, install nodemon globally:
```bash
npm install -g nodemon
npm run dev:server
```

## Usage

1. **Visit the application** at `http://localhost:5173`

2. **Sign up for a new account** or login if you already have one

3. **Select game options:**
   - Programming Language (JavaScript, Python, Java, C++, React)
   - Topic (Functions, Arrays, Classes, etc.)
   - Difficulty (Easy, Medium, Hard)

4. **Play the game:**
   - Guess letters to complete the missing word in the code snippet
   - You have 6 wrong guesses before the game ends
   - Win points for successful completions

5. **Track your progress:**
   - View your profile for detailed statistics
   - Check the leaderboard to see top players
   - Review your game history

## Game Rules

- Each correct guess reveals matching letters in the word
- Wrong guesses add parts to the hangman drawing
- Win by guessing the complete word before 6 wrong guesses
- Scoring: 10 points per successful game, 0 points for losses
- Scores are only saved for authenticated users

## Available Scripts
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run server` - Start Express server
- `npm run dev:server` - Start server with auto-reload
- `npm run lint` - Run ESLint

## Quick Start Guide

1. Make sure MongoDB is running locally
2. Run `npm install` to install dependencies
3. Run `npm run server` in one terminal
4. Run `npm run dev` in another terminal
5. Open `http://localhost:5173` in your browser
6. Create an account and start playing!

## Security Notes

- Always use HTTPS in production
- Set secure JWT secret (min 32 characters)
- Enable MongoDB authentication
- Use environment variables for sensitive data

## License

This project is licensed under the MIT License.

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/5b9a2a9e-fc80-4c45-a47f-6c71cd310351

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/5b9a2a9e-fc80-4c45-a47f-6c71cd310351) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/5b9a2a9e-fc80-4c45-a47f-6c71cd310351) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
