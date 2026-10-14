# 🍽️ Bistro Boss — Restaurant Management & Food Ordering Platform

A full-stack restaurant management and food ordering web application that allows users to explore food items, place orders, make payments, view payment history, and book tables. Admins can manage menu items, users, reservations, and website statistics through a dedicated dashboard.

## 🌐 Live Project

- **Live Website:** https://bistro-boss-17795.web.app/
- **Frontend Repository:** https://github.com/saifur2468/Bistro-restaurant-client

## 🛠️ Technologies Used

### Frontend
- React.js
- Tailwind CSS
- React Router
- SweetAlert2

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- Firebase Authentication

### Deployment
- Firebase Hosting


## ✨ Core Features

### 👤 User Features

- 🍔 Browse and explore available food items
- 🔍 Discover food by category
- 🛒 Add food items to the cart
- 💳 Complete online payments
- 📜 View payment history
- 👤 Manage user profiles
- 📅 Book restaurant tables
- 📋 Track booking status

### 🛡️ Admin Features

- ➕ Add new food items to the menu
- ✏️ Update existing food items
- 🗑️ Delete menu items
- 📊 Manage restaurant reservations
- 👥 View and manage users
- 🔐 Promote users to administrator
- 📈 View website statistics and dashboard information

### 💳 Payment System

- Integrated online payment functionality
- Process food orders and payments
- Store payment records in the database
- Allow users to review their payment history

### 📅 Table Booking System

- Submit table booking requests
- Track reservation status
- Manage booking requests from the admin dashboard
- Support Pending, Approved, and Rejected statuses

## 🔑 Demo Admin Credentials

Use the following demo account to explore administrator features, if the account is active:

- **Email:** `admin@bistroboss.com`
- **Password:** `123456`

> ⚠️ Demo credentials are provided for testing purposes only. Never use these credentials for a production administrator account. Avoid publishing real admin passwords in a public repository.

## 📦 Dependencies

The project uses the following core technologies and libraries:

- `react` — Build interactive user interfaces
- `react-router-dom` — Client-side routing
- `tailwindcss` — Utility-first CSS styling
- `sweetalert2` — Interactive alerts and confirmation dialogs
- `firebase` — Authentication and frontend services
- `express` — Backend API framework
- `mongodb` — Database operations
- `stripe` — Payment processing, if included in the current implementation

For the complete and accurate dependency list, check the `package.json` file in each repository.

## ⚙️ Run Locally

### Prerequisites

- Node.js and npm
- Git
- MongoDB database
- Firebase project configuration

### Step 1: Clone the Repository

```bash
git clone https://github.com/saifur2468/Bistro-restaurant-client.git
cd Bistro-restaurant-client
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

Create a `.env.local` file in the project root and add the environment variables required by your application.

Example:

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_firebase_app_id
```

> Use the exact variable names referenced by your source code. If the project uses Create React App or Next.js instead of Vite, the environment variable naming convention will differ.

### Step 4: Start the Development Server

```bash
npm run dev
```

Open the local URL shown in your terminal, commonly `http://localhost:5173`.

### Step 5: Configure the Backend

Clone the backend repository separately, install its dependencies, configure the MongoDB connection and other required environment variables, then start the backend using the scripts specified in its `package.json`.

## 🔗 Project Resources

- **Live Website:** https://bistro-boss-17795.web.app/
- **GitHub Repository:** https://github.com/saifur2468/Bistro-restaurant-client


⭐ If you find this project useful, consider giving the repository a star.
