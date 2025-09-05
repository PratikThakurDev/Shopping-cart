🛒 DigiTech – Modern E-commerce Store
A responsive, modular e-commerce web app built with React. Users can browse, search, view product details in a modal, and manage a shopping cart with quantity control.

🚀 Features
🔍 Live Search: Search for products by title.

🏠 Homepage Sections:

Promo banners

Trending products by category

Recommended section

Collection grid

🧾 Product Modal: Quick view and add to cart.

🛒 Shopping Cart:

Quantity +/– controls

Auto-calculated subtotal, tax, delivery, discount, total

Remove single or all items

📱 Fully Responsive layout using CSS Modules.

🧩 Tech Stack
Frontend: React, React Router DOM

Styling: CSS Modules

State Management: React Hooks (useState, useEffect)

Routing: react-router-dom

Data: Fetched from dummy product API via productService.js

🗂️ Project Structure
ruby
Copy
Edit
src/
│
├── api/                # API fetch logic
│   └── productService.js
├── components/         # Reusable components
│   ├── NavBar.jsx
│   ├── BrandRow.jsx
│   └── ProductModal.jsx
├── pages/              # Route components
│   ├── HomePage.jsx
│   ├── CartPage.jsx
│   └── ShoppingSection.jsx
├── styles/             # CSS Modules
│   └── *.module.css
├── utils/
│   └── getProduct.js   # Product filtering utility
├── App.jsx             # Main app logic and routing
└── main.jsx            # ReactDOM render
📦 Setup & Installation
Clone the repo:

bash
Copy
Edit
git clone https://github.com/your-username/digitech-ecommerce.git
cd digitech-ecommerce
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev
Build for production:

bash
Copy
Edit
npm run build
🔧 Customization
Update product filters in getProduct.js to adjust logic.

Modify styling in /styles using CSS Modules.

Integrate backend/cart storage if needed.


📝 To-Do (for future)
 LocalStorage-based cart persistence

 Product detail page (/product/:id)

 Backend integration

 Payment gateway (Stripe)

 Wishlist & user auth

🧑‍💻 Author
[Pratik Thakur]
Made with ❤️ using React and CSS Modules.