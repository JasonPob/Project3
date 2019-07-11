import React from "react";
import './style.css';

function Nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand brandLogo" href="/">
        OmniCut
      </a>
      <div className="collapse navbar-collapse" id  ="navbarSupportedContent">
        
        <ul  className="navbar-nav mr-auto float-right">

          <li className="nav-item active brandPageNames">
            <a className="nav-link text-primary" href="/Vendor">
              Vendor <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item active brandPageNames float-right">
            <a className="nav-link text-primary" href="/Customer">
              Customer <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
  
  export default Nav;
  