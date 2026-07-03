# 🚚 Unstopable Logistics

A powerful and easy-to-use full-stack application to manage logistics, track orders, and assign delivery agents. This system serves as a central command center for all your delivery operations.

## ✨ Features

*   **Secure Access:** User registration and login system to protect your data.
*   **Order Management:** Create and track logistics orders from start to finish.
*   **Zone & Area Control:** Easily manage delivery zones, areas, and rate cards for pricing.
*   **Agent Assignment:** Assign drivers or agents to specific orders and track their progress.
*   **Dashboard View:** Get a clear overview of your operations in one place.

## 🛠️ Tech Stack

**Frontend**
*   React (with React Router for navigation)
*   Tailwind CSS (for styling and dark mode)
*   Zustand (for simple state management)
*   React Hook Form & Zod (for form validation)
*   Lucide React (for icons)

**Backend**
*   Node.js with Express
*   REST API setup with clear routing
*   CORS configured for secure frontend connection

## 🚀 How to Run Locally

### 1. Clone the project
\`\`\`bash
git clone https://github.com/your-username/unstopable-logistics.git
cd unstopable-logistics
\`\`\`

### 2. Set up the Backend
Open a terminal and go to your backend folder.
\`\`\`bash
cd backend
npm install
\`\`\`

Create a `.env` file in the backend folder and add your server port:
\`\`\`env
PORT=5000
\`\`\`

Start the backend server:
\`\`\`bash
npm start
\`\`\`

### 3. Set up the Frontend
Open a new terminal and go to your frontend folder.
\`\`\`bash
cd frontend
npm install
\`\`\`

Create a `.env` file in the frontend folder and connect it to your backend:
\`\`\`env
VITE_API_URL=http://localhost:5000/api
\`\`\`

Start the frontend app:
\`\`\`bash
npm run dev
\`\`\`

## 📁 API Routes

The backend includes the following main routes:
*   `/api/auth` - Login and Register
*   `/api/orders` - Order management
*   `/api/tracking` - Real-time tracking
*   `/api/agents` - Delivery agent management
*   `/api/zones` & `/api/areas` - Location settings
*   `/api/pricing` & `/api/rate-cards` - Cost calculations

src/
├── controllers/
├── routes/
├── services/
├── middleware/
├── prisma/
├── utils/
├── validators/

