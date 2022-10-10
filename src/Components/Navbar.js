import React from "react";
import globe from '../images/globe.svg'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      {/* Main Nav-Bar Section */}
      <div className="Navbar">
        <div className="custom-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="nav-child-area">
                <ul className="left-list-nav">
                  <li>
                    <Link to='/'>
                    Uber
                    </Link>
                  </li>
                  <li>
                    Company
                  </li>
                  <li>Safety</li>
                  <li>Help</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="nav-child-area d-flex justify-content-end align-items-center">
                <ul>
                  <li> <img src={globe} height="20" alt="" /> EN</li>
                  <li>
                    Products
                  </li>
                  <li>Login</li>
                  <li><Link to='/signup'>
                  <button className="light-theme-btn">
                  Sign up
                  </button>
                  </Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar