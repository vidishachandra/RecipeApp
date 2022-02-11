import React,{useState} from "react";
import { Link } from "react-router-dom";
import '../src/Navbar.css';




function Navvy(){
    return(
        <div>


        <nav className="navbar">
            <h className="headernav">Take Recipe</h>
            <ul>
                <li><Link className="start" to="/Buy" style={{ textDecoration: 'none' }}>Buy</Link></li>
                <li><Link className="start" to="/Foods" style={{ textDecoration: 'none' }}>Foods</Link></li>
                <li><Link className="start" to="/Explore" style={{ textDecoration: 'none' }}>Explore</Link></li>
                <li><Link className="start" to="/About" style={{ textDecoration: 'none' }}>About</Link></li>
                <li><Link className="start" to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
                <li><Link className="start" to="/Login" style={{ textDecoration: 'none' }}>Login</Link></li>
                
            </ul>
        </nav>
        
        </div>
        
    );
}

export default Navvy;