# LeadFlow CRM

A modern full-stack Customer Relationship Management (CRM) platform built to help businesses manage leads, track follow-ups, monitor sales pipelines, and analyze performance through real-time dashboards.

## 🚀 Features

### Authentication & Security

* JWT Authentication
* User Registration & Login
* Protected Routes
* User-specific Lead Management
* Secure Password Hashing

### Lead Management

* Create, Edit, Delete Leads
* Lead Details Page
* Lead Status Tracking
* Lead Value Tracking
* Notes Management
* Activity History
* Search Leads
* Filter & Sort Leads
* Pagination Support
* CSV Export

### Dashboard

* Total Leads
* Active Leads
* Converted Leads
* Lost Leads
* Conversion Rate
* Upcoming Follow-Ups
* Real-Time KPI Cards

### Analytics

* Status Distribution Pie Chart
* Lead Source Performance
* Monthly Growth Trends
* Conversion Funnel
* Top Companies Analysis
* Revenue Analytics
* Pipeline Value Tracking
* Average Deal Size Calculation

### Follow-Up Management

* Upcoming Follow-Ups
* Overdue Follow-Ups
* Due Today Follow-Ups
* Completed Follow-Ups
* Follow-Up Tracking & Completion

### Kanban Board

* Drag & Drop Lead Status Updates
* Visual Sales Pipeline
* Real-Time Status Synchronization

### User Settings

* Profile Management
* Account Settings
* Theme Preferences
* Dark Mode Support

---

## 🛠 Tech Stack

### Frontend

* React
* TypeScript
* TanStack Router
* Tailwind CSS
* Recharts
* Axios

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

### Database

* MongoDB Atlas
* Mongoose

---

## 📂 Project Structure

```bash
leadflow-crm/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (.env)

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend (.env)

```env
VITE_API_URL=https://leadflow-crm-hm7v.onrender.com
```

---

## 🖥️ Local Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/leadflow-crm.git
cd leadflow-crm
```

### Install Dependencies

Backend:

```bash
cd backend
npm install
```

Frontend:

```bash
cd frontend
npm install
```

### Run Backend

```bash
cd backend
npm run dev
```

### Run Frontend

```bash
cd frontend
npm run dev
```

---

## 📊 Key Metrics Tracked

* Total Leads
* Active Leads
* Converted Leads
* Lost Leads
* Conversion Rate
* Pipeline Revenue
* Average Deal Size
* Lead Source Performance
* Monthly Growth Trends

---

## 🔒 Security Features

* JWT Token Authentication
* Password Hashing
* Protected API Routes
* User Data Isolation
* Environment Variable Protection

---

## 🌐 Deployment

### Frontend

Deployed using Vercel.

### Backend

Deployed using Render.

### Database

MongoDB Atlas.

---

## 📈 Future Enhancements

* Role-Based Access Control (RBAC)
* Email Notifications
* Lead Assignment System
* File Attachments
* Real-Time Updates (Socket.io)
* Email Marketing Integration
* Advanced Reporting

---

## 👩‍💻 Author

**Mahika Chaurasiya**

Full Stack Developer | Engineering Student

GitHub: https://github.com/mahikaverse

---

## ⭐ Project Highlights

* Full Stack CRM Application
* Real-Time Analytics Dashboard
* JWT Authentication
* MongoDB Atlas Integration
* Responsive Design
* Production-Ready Architecture
* User-Specific Data Management
