import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../img/Logo.svg'
import '../styles/navbar.css'
import { Search, BoxArrowInRight, CartDash} from 'react-bootstrap-icons';

const Navbar = () => {

   const isActive = ({ isActive }) => {
      if(isActive) 
         return 'link_focus'
   }

   return (
      <div className="container">
         <nav className="main_menu">
            <img className="logo" src={logo} alt="" />
            <ul className="main_link">
               <li><NavLink className ={isActive} to="/">Home</NavLink></li>
               <li><NavLink className={isActive}   to="/shop">Shop</NavLink></li>
               <li><NavLink className={isActive}  to="/plantcare">Plant Care</NavLink></li>
               <li><NavLink className={isActive}  to="/blogs">Blogs</NavLink></li>
            </ul>
            <ul className="main_ul">
               <li><Search className="main_search"/></li>
               <li className="cartNum"><CartDash className="main_cart"/></li>
               <li>
                  <div className="btn">
                     <BoxArrowInRight className="icon_logon"/>
                     <span>Login</span>
                  </div>
               </li>

            </ul>
         </nav>
      </div>
   );
};

export default Navbar;