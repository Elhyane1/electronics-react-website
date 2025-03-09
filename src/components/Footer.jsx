import { FaFacebookSquare } from "react-icons/fa"; //facebook icon
import { FaTwitter } from "react-icons/fa"; //twitter icon
import { FaLinkedinIn } from "react-icons/fa"; //linked in icon
import { TbDrone } from "react-icons/tb"; //Drone icon






export default function Footer(){
    return (
      <footer className="bg-gray-900 text-gray-300 py-15">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div>
            <h2 className="text-white text-2xl font-bold flex items-center gap-2">
              <span className="bg-white text-black rounded-full p-2"><TbDrone /></span> Gadgets
            </h2>
            <p className="text-sm mt-3">
              Cras gravida bibendum dolor eu varius morbi fermentum velit eget vehicula lorem sodales donec quis volutpat orci.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"><FaFacebookSquare /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"><FaTwitter /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"><FaLinkedinIn /></a>
            </div>
          </div>
  
          {/* Useful Links */}
          <div>
            <h3 className="text-white font-bold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Products</a></li>
              <li><a href="#" className="hover:text-white">Login</a></li>
              <li><a href="#" className="hover:text-white">Sign Up</a></li>
            </ul>
          </div>
  
          {/* Custom Area */}
          <div>
            <h3 className="text-white font-bold mb-4">CUSTOM AREA</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">My Account</a></li>
              <li><a href="#" className="hover:text-white">Tracking List</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Orders</a></li>
              <li><a href="#" className="hover:text-white">My Cart</a></li>
            </ul>
          </div>
  
          {/* More Information */}
          <div>
            <h3 className="text-white font-bold mb-4">MORE INFORMATION</h3>
            <p className="text-sm">
              Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus.
            </p>
            {/* Payment Icons */}
            {/* <div className="flex gap-3 mt-4">
              <img src="/visa.png" alt="Visa" className="w-12 opacity-80" />
              <img src="/amex.png" alt="Amex" className="w-12 opacity-80" />
              <img src="/mastercard.png" alt="MasterCard" className="w-12 opacity-80" />
              <img src="/paypal.png" alt="PayPal" className="w-12 opacity-80" />
            </div> */}
          </div>
        </div>
  
        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-8">
          Copyright © 2025 - Ecommerce Website By OTHMAN EL HYANE
        </div>
      </footer>
    );
  };  