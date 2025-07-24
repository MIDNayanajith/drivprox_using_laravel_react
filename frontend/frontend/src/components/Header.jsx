import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";

const Header = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <header className="header">
      <div className="top-bar">
        <Container>
          <div className="top-bar-content">
            <div className="top-links">
              <a href="#">About Us</a>
              <a href="#">Your Dream Car</a>
              <a href="#">Contact Us</a>
              <a href="#">Become A Partner</a>
              <a href="#">Help Center</a>
            </div>
            <div className="contact-info">
              <span>Need Help? Call us: (+94) 76 7744 000</span>
              <span>or support@driveprox.com</span>
            </div>
          </div>
        </Container>
      </div>
      <Navbar expand="lg" className="navbar">
        <Container>
          {/* <div className="navbar-content">
            <div className="logo-container">
              <div className="logo">
                <Link to="/">
                  <img src="/images/Vector.png" alt="DriveProX" />
                  <span>DriveProX</span>
                </Link>
              </div>
              <Button
                variant="link"
                className="filter-toggle"
                onClick={() => setShowFilters(!showFilters)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 6H20M7 12H17M10 18H14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Button>
            </div>
            <div className="search-bar">
              <Form>
                <Form.Control
                  type="text"
                  placeholder="Search by Make Model Year, Product Type, Part Number, or Brand"
                />
                <Button type="submit">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM20 20l-4.35-4.35"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </Form>
            </div>
            <div className="navbar-actions">
              <Link to="#" className="cart-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link to="#" className="user-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div> */}
          <div className="navbar-content">
            {/* Left Section */}
            <div className="navbar-left">
              <div className="logo">
                <Link to="/">
                  <img src="/images/Vector.png" alt="DriveProX" />
                  <span>DriveProX</span>
                </Link>
              </div>
              <Button
                variant="link"
                className="filter-toggle"
                onClick={() => setShowFilters(!showFilters)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 6H20M7 12H17M10 18H14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Button>
            </div>

            {/* Center Section */}
            <div className="navbar-center">
              <Form className="search-form">
                <Form.Control
                  type="text"
                  placeholder="Search by Make Model Year, Product Type, Part Number, or Brand"
                />
                <Button type="submit">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM20 20l-4.35-4.35"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </Form>
            </div>

            {/* Right Section */}
            <div className="navbar-right">
              <Link to="#" className="cart-icon">
                {/* cart icon SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link to="#" className="user-icon">
                {/* user icon SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
