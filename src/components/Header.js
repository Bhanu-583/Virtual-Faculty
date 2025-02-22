import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpg"; // Adjust the path as per your structure

const Header = () => {
  // State to track if the icon is hovered
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="College Logo" />
      </div>

      <nav className="navigation">
        <ul>
          {/* "Home" button with Lord Icon and label */}
          <li>
            <Link
              to="/"
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              onMouseEnter={() => setHoveredIcon('home')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className="icon-frame">
                <lord-icon
                  src="https://cdn.lordicon.com/qeltvbrs.json"
                  trigger="hover"
                  stroke="bold"
                  colors={hoveredIcon === 'home' ? "primary:beige,secondary:beige" : "primary:lightblue,secondary:lightblue"}
                  style={{ width: '50px', height: '50px' }}
                ></lord-icon>
              </div>
              <span style={{ fontSize: '12px', color: '#333' }}>Home</span>
            </Link>
          </li>
          {/* "About" button with Lord Icon and label */}
          <li>
            <Link
              to="/about"
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              onMouseEnter={() => setHoveredIcon('about')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className="icon-frame">
                <lord-icon
                  src="https://cdn.lordicon.com/xsqjakgm.json"
                  trigger="hover"
                  stroke="bold"
                  colors={hoveredIcon === 'about' ? "primary:beige,secondary:beige" : "primary:lightblue,secondary:lightblue"}
                  style={{ width: '50px', height: '50px' }}
                ></lord-icon>
              </div>
              <span style={{ fontSize: '12px', color: '#333' }}>About</span>
            </Link>
          </li>
          {/* "Login" button with Lord Icon and label */}
          <li>
            <Link
              to="/login"
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              onMouseEnter={() => setHoveredIcon('login')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className="icon-frame">
                <lord-icon
                  src="https://cdn.lordicon.com/xfzuyvam.json"
                  trigger="hover"
                  stroke="bold"
                  colors={hoveredIcon === 'login' ? "primary:beige,secondary:beige" : "primary:lightblue,secondary:lightblue"}
                  style={{ width: '50px', height: '50px' }}
                ></lord-icon>
              </div>
              <span style={{ fontSize: '12px', color: '#333' }}>Login</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
