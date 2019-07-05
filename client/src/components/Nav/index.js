import React from "react";

function Nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Project 3
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/Vendor">
              Vendor <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/Customer">
              Customer <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
  
  export default Nav;
  