// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
// ظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظ
// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <Home />
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default App;
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Table from "./components/Table/Table";

const products = [
  {
    Name: "Laptop",
    Price: 1200,
    Category: "Electronics",
    Stock: 10,
  },
  {
    Name: "Smartphone",
    Price: 800,
    Category: "Electronics",
    Stock: 25,
  },
  {
    Name: "Headphones",
    Price: 150,
    Category: "Accessories",
    Stock: 40,
  },
];

function App() {
  const handleAddProduct = () => {
    alert("Product added!");
  };

  const handleDeleteProduct = () => {
    alert("Product deleted!");
  };

  return (
    <div className="app">
      <h1>Product Dashboard</h1>

      <section className="buttons-section">
        <h2>Buttons</h2>

        <Button
          text="Add Product"
          onClick={handleAddProduct}
          variant="primary"
        />

        <Button
          text="Delete Product"
          onClick={handleDeleteProduct}
          variant="danger"
        />
      </section>

      <section className="cards-section">
        <h2>Products</h2>

        <div className="cards-container">
          <Card
            title="Laptop"
            description="A powerful laptop for work and study."
            image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
          />

          <Card
            title="Smartphone"
            description="A modern smartphone with great features."
          >
            <Button
              text="View Details"
              onClick={() => alert("Viewing smartphone details")}
              variant="secondary"
            />
          </Card>
        </div>
      </section>

      <section className="table-section">
        <h2>Product List</h2>

        <Table
          columns={["Name", "Price", "Category", "Stock"]}
          data={products}
          striped
        />
      </section>
    </div>
  );
}

export default App;
