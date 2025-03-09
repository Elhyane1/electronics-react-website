import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useState } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TbDrone } from "react-icons/tb"; //Drone icon


const NavBar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const activeLink = ({ isActive }) =>
    isActive
      ? 'text-white '
      : 'text-[#727476] hover:text-white';

      const cartItems = useSelector((state) => state.cart.cartItems);

      // calculate the total quantity of items
      const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);


  



  return (
    <nav className="bg-[#111518] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-['Poppins'_'sans-serif']">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex justify-center items-center gap-2.5 text-2xl font-bold text-white"><TbDrone className='text-4xl' /><p>OTHMAN STORE</p></div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-semibold">
            <NavLink to="/home" className={activeLink}>Home</NavLink>
            <NavLink to="/products" className={activeLink}>Products</NavLink>
            <NavLink to="/about" className={activeLink}>About</NavLink>
            <NavLink to="/contacts" className={activeLink}>Contact</NavLink>
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <NavLink to="/cart" className="relative">
              <FiShoppingCart className="text-2xl cursor-pointer text-gray-700 hover:text-white" />
              {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
                        {totalQuantity}
                    </span>
                )}
            </NavLink>
            <NavLink to="login">
              <MdOutlineAccountCircle className="text-2xl cursor-pointer text-gray-700 hover:text-white" />
            </NavLink>
            {/* <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {menuOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-3">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Shop</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      )} */}
    </nav>
  );
};

export default NavBar;
