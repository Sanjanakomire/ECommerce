import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
        const Navbar = () => {
            const { cartItems } = useCart() 
            return(
        
                <div className="navbar-Section">
                
                    <div className="navSection">
                
                    <Link to='/' className="custom-link">
                    <div className="title">
                        <h2>E-Commerce</h2>
                    </div>
                    </Link>
                    <div className="search">
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <div className="user">
                        
                        <div className="user-detail">SignIn/SignUp</div>
                    </div>
                    
                        <Link to ='/cart'>
                        <div className="cart">Cart
                            
                        <span>
                            {cartItems ? cartItems.length :0}
                        </span>
                    </div>
                    </Link>
                    

                            </div>
                    
                    
                    <div className="subMenu">
                        <ul>
                            <Link to='/menswear' className="custom-link">
                            <li>Menswear</li>
                            </Link>
                            <Link to='/womenswear' className="custom-link">
                            <li>Womenswear</li>
                            </Link>
                            <Link to='/books' className="custom-link">
                            <li>Books</li>
                            </Link>
                            <Link to='/ac' className="custom-link">
                            <li>Ac</li>
                            </Link>
                            <Link to='/accessories' className="custom-link">
                            <li>Accessories</li>
                            </Link>
                            <Link to='/laptops' className="custom-link">
                            <li>Laptops</li>
                            </Link>
                            <Link to='/smartphones' className="custom-link">
                            <li>Smartphones</li>
                            </Link>
                            <Link to='/watches' className="custom-link">
                            <li>Watches</li>
                        
                        </Link>
                        </ul>
                    </div>
                
                    </div>
                
                

            );
        };
export default  Navbar;