import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import {useState} from 'react';

import SignupPage from "./SignupPage/SignupPage";

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState("invisible");

  // Function to open modal
  const openModal = () => {
    setIsModalOpen("visible");
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen("invisible");
  };

  
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">BookCollectionManager</Link>
          </li>
          <li>
            <Link to="/contacts">ContactListManager</Link>
          </li>
          <li>
            <Link to="/recipes">RecipeManager</Link>
          </li>
          <li>
            <Link to="/shoppingcart">ShoppingCart</Link>
          </li>
          <li>
          <Link to="#" onClick={() => openModal()}>Signup</Link>
          </li>
        </ul>
      </nav>

      <main className="page-content">
        <Outlet />
      </main>
      <SignupPage isModalOpen={isModalOpen} closeModal={closeModal} />

    </>
  );
};

export default Layout;
