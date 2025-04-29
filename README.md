# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




🍝 Mamma Mia – Italian Restaurant Web Application
Live Site: https://mamamiabd.netlify.app

📌 Overview
Mamma Mia is a dynamic and responsive restaurant web application where users can browse food items, log in via Gmail, add products to their cart, and make purchases. Admins have access to manage product listings via an admin panel. The app also includes smart checkout logic — purchasing 3 or more items grants a 10% discount.

🚀 Key Features
🔐 Authentication

Gmail login via Firebase Authentication

Private routes with React Router DOM

🛍️ E-Commerce Functionality

Add to cart, update quantity, and remove items

Checkout system with real-time price calculation

Automatic 10% discount when buying 3+ products

🧑‍💼 Admin Panel

Add, edit, and delete products (CRUD operations)

🖼️ Image Hosting

Product images hosted using ImgBB

⚡ Efficient Data Handling

Powered by TanStack Query (React Query) for data fetching and caching

💬 Beautiful Alerts

User notifications and confirmations handled with SweetAlert2 (Swal)

🛠️ Tech Stack
React.js: Frontend framework

Tailwind CSS: Styling and responsive design

Firebase Auth: Authentication (Gmail login)

ImgBB: Image upload and hosting

SweetAlert2: Interactive alert dialogs

TanStack Query: Data fetching, caching, and syncing

React Router DOM: Page routing and route protection

Netlify: Deployment

Clone the repository

git clone https://github.com/your-username/mamma-mia.git

cd mamma-mia
2️⃣ Install dependencies

npm install

3️⃣ Set up environment variables
Create a .env file in the root of the project and add the following keys:


VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_IMGBB_API_KEY=your_imgbb_api_key
4️⃣ Start the development server

npm run dev


💻 Admin Panel
Admins can:

Add new food products with images.

Update existing product details.

Delete any product.

Admin role can be implemented via route protection or role-based checks in the backend (optional).


