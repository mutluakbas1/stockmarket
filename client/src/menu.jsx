import React from "react";
import Link from "next/Link";
const Menu = () => {

    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="navbar">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Stock Control</a>
              </Link>
            </li>

          
           
          </ul>
        </div>
      </nav>
    )};
     

    export default Menu;