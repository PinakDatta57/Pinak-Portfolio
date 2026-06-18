const projects = [
  {
    id: 1,
    title: "LocalChefBazaar",
    subtitle: "Full-Stack MERN Marketplace",
    short: "A role-based online platform connecting home cooks with customers. Features JWT auth, Stripe payments, real-time order tracking, and three dashboards (User, Chef, Admin).",
    image: "https://i.postimg.cc/bJ8VKNLV/Screenshot-2026-06-17-185515.png",
    chips: ["React","Node.js","Express","MongoDB","Firebase","JWT","Stripe"],
    live: "https://localchefbazaaar.netlify.app/",
    github: "https://github.com/Pinak57/localchef-client.git",
    description: `LocalChefBazaar is a modern full-stack marketplace built with the MERN stack that connects home cooks with customers seeking fresh, homemade food. The platform features three completely separate dashboards — one each for Users, Chefs, and Admins — with role-based access control enforced both on the frontend and backend via JWT tokens stored in httpOnly cookies.

Customers can browse daily menus, check chef availability, place orders, make secure Stripe payments, and track order status in real time. Chefs can list meals, manage menus, accept or reject orders, and view earnings. Admins have full platform oversight including user management, chef application approvals, and a Recharts analytics dashboard.`,
    stack: [
      "React.js — Component-based SPA with React Router v6",
      "Node.js + Express.js — RESTful API backend",
      "MongoDB + Mongoose — Database with relational-style schemas",
      "Firebase Auth — Email/password authentication",
      "JWT (httpOnly cookies) — Secure session management",
      "Stripe — Payment processing integration",
      "Tailwind CSS — Utility-first responsive styling",
      "Recharts — Admin analytics dashboard charts",
      "React Hook Form — All form validation",
      "Axios Interceptors — Centralized API request handling",
      "Framer Motion — Page & component animations",
      "Vercel + Railway — Frontend & backend deployment"
    ],
    challenges: [
      "Implementing three-tier role-based access control with JWT middleware — required careful token verification on every protected route.",
      "Keeping order status in sync between Chef and User dashboards in real time without a dedicated WebSocket server.",
      "Handling Stripe payment flow — redirecting to payment page only when order is accepted and payment is pending, then updating MongoDB after success.",
      "Designing a Firestore/MongoDB hybrid data model to handle users, chefs, meals, orders, reviews and favorites cleanly.",
      "Preventing fraud users from placing orders or creating meals at the API level, not just the UI level.",
      "Making the entire platform pixel-perfect on mobile, tablet and desktop simultaneously."
    ],
    improvements: [
      "Add real-time chat between users and chefs using Socket.io.",
      "Implement push notifications for order status updates.",
      "Build a React Native mobile app version.",
      "Add a recommendation engine based on user order history.",
      "Implement multi-language support (Bengali + English).",
      "Add subscription plans for chefs with premium features."
    ]
  },
  {
    id: 2,
    title: "Personal Portfolio",
    subtitle: "React + Framer Motion Showcase",
    short: "A fully responsive personal portfolio built with React, Framer Motion animations, React Router, and React Type Animation. Features smooth scroll reveals and a dark premium design.",
    image: "https://i.postimg.cc/52bSpFrV/Screenshot-2026-06-18-123947.png",
    chips: ["React","Framer Motion","React Router","CSS3"],
    live: "https://pinak-portfolio.netlify.app/",
    github: "https://github.com/Pinak57/Pinak-Portfolio.git",
    description: `A modern, fully responsive personal portfolio website built from scratch with React. Every section has scroll-triggered reveal animations powered by Framer Motion and react-intersection-observer. Features include a typewriter hero, animated skill bars, project detail pages via React Router, and a contact form.

The project demonstrates mastery of React component architecture, CSS custom properties for theming, responsive layouts with CSS Grid and Flexbox, and smooth UX through thoughtful animation.`,
    stack: [
      "React.js — SPA with component-based architecture",
      "Framer Motion — Scroll-triggered animations",
      "React Router v6 — Client-side routing + project detail pages",
      "React Type Animation — Typewriter effect",
      "React Icons — Scalable icon library",
      "React Scroll — Smooth section navigation",
      "CSS3 Custom Properties — Theming & design tokens",
      "Netlify — Static site deployment"
    ],
    challenges: [
      "Creating smooth scroll-triggered animations without layout shift or janky repaints.",
      "Building the typewriter effect with proper loop and backspace timing.",
      "Animating skill bars only when they enter the viewport using IntersectionObserver.",
      "Making the design look polished on every screen size from 320px to 4K."
    ],
    improvements: [
      "Add a dark/light theme toggle with localStorage persistence.",
      "Connect the contact form to EmailJS for real email delivery.",
      "Add a blog section using a headless CMS like Contentful.",
      "Add page transition animations between routes."
    ]
  },
  {
  id: 3,
  title: "HomeNest",
  subtitle: "MERN Stack Real Estate Listing Platform",
  short: "A full-stack real estate listing platform where users can add, manage, browse, search, and review rental or sale properties with secure authentication and property management features.",
  image: "https://i.postimg.cc/HWNZVQQ6/Screenshot-2026-06-18-071408.png",
  chips: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS"],
  live: "https://homenestpro.netlify.app/",
  github: "https://github.com/Pinak57/homenest-client-.git",
  description: `HomeNest is a full-stack real estate listing platform designed for property owners and buyers/renters. Users can browse, search, and filter properties based on location, price, and category. Authenticated users can add new properties, update existing listings, delete their own properties, and manage ratings and reviews.

The platform includes Firebase Authentication with Email/Password and Google Sign-In, protected routes, MongoDB database integration, property search and sorting functionality, ratings and reviews, responsive design, and a modern user-friendly interface. The application follows CRUD operations and real-world property management workflows.`,
  
  stack: [
    "React.js — Frontend UI Development",
    "React Router — Client-side Routing",
    "Firebase Authentication — User Authentication",
    "Node.js — Backend Runtime",
    "Express.js — REST API Development",
    "MongoDB — Database Management",
    "Tailwind CSS — Responsive Styling",
    "SweetAlert2 / React Toastify — Notifications",
    "Vercel — Server Deployment",
    "Firebase / Netlify — Client Deployment"
  ],

  challenges: [
    "Implementing secure private routes and authentication flow.",
    "Managing CRUD operations while keeping the UI synchronized with MongoDB.",
    "Building dynamic property search and backend sorting functionality.",
    "Displaying real-time property ratings and reviews efficiently.",
    "Maintaining responsive layouts and consistent UI across all devices."
  ],

  improvements: [
    "Add property wishlist and favorites functionality.",
    "Implement direct messaging between buyers and property owners.",
    "Add advanced map integration using Google Maps API.",
    "Introduce property booking and appointment scheduling.",
    "Add AI-powered property recommendations based on user preferences."
  ]
}
];

export default projects;
