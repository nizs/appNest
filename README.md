# 🦸‍♂️ AppNest

## 🌐 Live Demo

🔗 https://app-nest-orcin.vercel.app/

---

## 📌 Project Overview

**AppNest** is a modern and responsive web application that showcases a collection of mobile applications with detailed insights. Users can explore trending apps, search through all available apps, and view detailed statistics including ratings, downloads, and reviews.

The project is built using **React, Tailwind CSS, DaisyUI, and Recharts**, ensuring a smooth and interactive user experience.

---

## 🚀 Features

### 🏠 Home Page

* Beautiful banner section with call-to-action buttons
* Statistics section (Downloads, Reviews, Active Apps)
* Trending Apps section with responsive grid layout
* “Show All” navigation to full app list

### 📱 All Apps Page

* Displays all apps dynamically from JSON data
* Live search functionality (case-insensitive)
* Responsive card layout
* Shows total number of apps

### 📊 App Details Page

* Detailed app information
* Download, rating, and review statistics
* Interactive **Recharts bar chart**
* App description section
* Install button UI

### ⚙️ Additional Features

* Fully responsive design (mobile, tablet, desktop)
* React Router with dynamic routes (`/app/:id`)
* Custom error handling for invalid routes
* Loading-friendly UI structure
* Clean reusable components (Navbar, Footer, Cards)

---

## 🛠️ Technologies Used

* ⚛️ React
* 🧭 React Router
* 🎨 Tailwind CSS
* 🌼 DaisyUI
* 🔔 React Toastify
* 📊 Recharts
* 🎯 React Icons
* 🚀 Vercel (Deployment)

---

## 📁 Project Structure

```
src/
│── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── AppCard.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── Apps.jsx
│   ├── AppDetail.jsx
│   ├── Installation.jsx
│
│── layout/
│   ├── MainLayout.jsx
│
│── router/
│   ├── router.jsx
│
public/
│── apps.json
```

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/appnest.git
cd appnest
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 🔥 Deployment

This project is deployed using **Vercel**.

### Important Configuration:

Create a `vercel.json` file:

```json
{
  "routes": [
    { "src": "/(.*)", "dest": "/" }
  ]
}
```

This ensures React Router works properly on reload.

---

## 🎯 Future Improvements

* Add LocalStorage for installed apps
* Implement “My Installation” page
* Add sorting (High → Low / Low → High)
* Add loading animations
* Improve UI/UX with transitions

---

## 👨‍💻 Author

**Tauhid Afser**
Frontend Developer (MERN Stack Learner)

---

## ⭐ Final Note

This project was built as part of an assignment to demonstrate real-world React development skills including routing, state management, UI design, and data visualization.

---
