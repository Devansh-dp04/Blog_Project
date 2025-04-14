# 📝 Blog Dashboard - Vanilla JS Project

This is a **simple blog dashboard** built using **HTML, CSS, and JavaScript (no frameworks)**. It supports **user authentication, blog listing, commenting, and user-specific comment editing/deletion**, all powered by `localStorage`.

---

## 🚀 Features

### 🔐 Authentication
- Login system using email/password
- Session tracking using `localStorage`
- Redirects to login if the user is not authenticated

### 🧑 User Dashboard
- Personalized welcome message
- Displays blog posts with:
  - Image
  - Title
  - Content
  - Comments count (💬 badge)

### 💬 Comments System
- View comments under each blog
- Post new comments (if logged in)
- Edit/Delete your own comments
- Live reloads to reflect changes

### 🚪 Logout
- One-click logout
- Clears session and redirects to login

---


  
## ⚙️ How It Works

### 📌 Login Logic
- Checks if `isLoggedIn === "true"` and `loggedInUser` exists
- Redirects to `dashboard.html` if logged in
- Saves login state to `localStorage`

### 🧱 Blog Rendering
- Loads `blogsData` from `localStorage`
- Dynamically creates blog cards with:
  - 📷 Image  
  - 📝 Title  
  - 📖 Content  
  - 💬 Comment badge  
  - 🗨️ Comment list  
  - ➕ New comment form  

### ✍️ Comment System
- Adds new comments to the correct blog (by index)
- Allows edit/delete **only if** the logged-in user is the author
- Updates are saved back to `localStorage`
- Reloads dashboard to reflect changes

---

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/30aa5ff7-245f-44f3-9e5c-d930dc167f2c)
![image](https://github.com/user-attachments/assets/831b043c-9950-4fe9-a191-0e780cfce1cb)
![image](https://github.com/user-attachments/assets/c3875d9b-85f6-4a13-8c9f-eb17a46de9c0)


