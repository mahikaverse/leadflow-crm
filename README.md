# LeadFlow CRM

A modern full-stack Customer Relationship Management (CRM) platform built to help businesses manage leads, track follow-ups, monitor sales pipelines, and analyze performance through real-time dashboards.

## Live Demo

Frontend: https://leadflow-crm-red.vercel.app/login

Backend API: https://leadflow-crm-hm7v.onrender.com

GitHub Repository: https://github.com/mahikaverse/leadflow-crm

---

## Features

### Authentication & Security

* JWT Authentication
* User Registration & Login
* Protected Routes
* User-specific Lead Management
* Secure Password Hashing

### Lead Management

* Create, Edit & Delete Leads
* Lead Status Tracking
* Deal Value Tracking
* Lead Notes & Activity History
* Search, Filter & Sort Leads
* Pagination Support
* CSV Export

### Dashboard

* Total Leads
* Active Leads
* Converted Leads
* Lost Leads
* Conversion Rate
* Follow-up Overview
* Real-time KPI Cards

### Analytics

* Status Distribution
* Lead Source Performance
* Monthly Growth Trends
* Conversion Funnel
* Top Companies Analysis
* Revenue Analytics
* Pipeline Value Tracking

### Follow-Up Management

* Upcoming Follow-ups
* Due Today Follow-ups
* Overdue Follow-ups
* Completed Follow-ups

### Kanban Board

* Drag & Drop Lead Management
* Visual Sales Pipeline
* Real-time Status Updates

### User Settings

* Profile Management
* Account Settings
* Dark Mode Support

---

## Tech Stack

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

## Environment Variables

### Backend (.env)

NODE_ENV=development

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

### Frontend (.env)

VITE_API_URL=https://leadflow-crm-hm7v.onrender.com

---

## Local Setup

### Clone Repository

git clone https://github.com/mahikaverse/leadflow-crm.git

cd leadflow-crm

### Backend Setup

cd backend

npm install

npm run dev

### Frontend Setup

cd frontend

npm install

npm run dev

---

## Security Features

* JWT Authentication
* Password Hashing
* Protected API Routes
* User Data Isolation
* Environment Variable Protection

---

## Deployment

### Frontend

Vercel

### Backend

Render

### Database

MongoDB Atlas

---

## Future Improvements

* Role-Based Access Control (RBAC)
* Email Notifications
* File Attachments
* Real-Time Updates
* Advanced Reporting
* Lead Assignment System

---

## Author

Mahika Chaurasiya

Engineering Student | Full Stack Developer

GitHub: https://github.com/mahikaverse

---

## Project Highlights

* Full Stack CRM Application
* MongoDB Atlas Integration
* JWT Authentication
* Real-time Analytics
* Responsive UI
* Production-Ready Architecture
* User-Specific Data Management
