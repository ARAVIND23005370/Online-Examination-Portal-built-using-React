#  Online Examination Portal (React + Vite)

##  Project Overview

The **Online Examination Portal** is a React-based web application that simulates a real-time online exam environment.  
It allows students to attempt exams with a countdown timer, dynamic question rendering, answer selection, and automatic result calculation.

This project demonstrates practical implementation of React fundamentals and modern frontend development using Vite.

---

##  Features

-  Real-time countdown timer
-  Multiple-choice question system
-  Dynamic question rendering
-  Controlled answer input
-  Automatic score calculation
-  Disable input after submission
-  Auto-submit when time expires
-  Clean and responsive UI
-  Component-based architecture

---

##  Tech Stack

- React (Functional Components)
- React Hooks (`useState`, `useEffect`, `useRef`)
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3

---

## 📂 Project Structure

```
Online-Examination-Portal-built-using-React/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── StudentCard.jsx
│   └── assets/
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

##  How It Works

1. The exam starts with a predefined time limit.
2. Questions are rendered dynamically.
3. Users select answers.
4. A countdown timer runs using `useEffect`.
5. When:
   - The user clicks submit → Score is calculated.
   - The timer reaches zero → Exam auto-submits.
6. Final result is displayed.

---

##  React Concepts Used

- Functional Components
- Props
- State Management (`useState`)
- Side Effects (`useEffect`)
- Refs (`useRef`)
- Conditional Rendering
- Event Handling
- Controlled Components

---

##  Installation & Setup

Clone the repository:

```
git clone https://github.com/ARAVIND23005370/Online-Examination-Portal-built-using-React.git
```

Navigate to the project folder:

```
cd Online-Examination-Portal-built-using-React
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

---

##  Learning Outcomes

- Building real-time applications using React
- Managing timer-based logic
- Handling dynamic UI updates
- Structuring React projects professionally
- Understanding modern frontend workflows using Vite

---

##  Future Improvements

- Add authentication system
- Add backend integration
- Store results in database
- Add question randomization
- Improve UI animations

---

##  Author

**Aravind R**

GitHub: https://github.com/ARAVIND23005370