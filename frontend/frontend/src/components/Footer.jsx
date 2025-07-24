import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter-section">
        <Container className="inner-container">
          <div className="newsletter-content">
            <h3>Join our newsletter for 10% off</h3>
            <p>Get our emails for info on new items, sales and much more.</p>
            <small>
              Register now to get latest updates on promotions & coupons.
            </small>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </Container>
      </div>
      <div className="footer-features">
        <Container className="inner-container">
          <div className="features-row">
            <div className="feature">
              <div className="feature-icon">🎧</div>
              <div className="feature-text">
                <h4>24/7 SUPPORT</h4>
                <p>Support every time</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">💳</div>
              <div className="feature-text">
                <h4>ACCEPT PAYMENT</h4>
                <p>Visa, Paypal, Master</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <div className="feature-text">
                <h4>SECURED PAYMENT</h4>
                <p>100% secured</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <div className="feature-text">
                <h4>FREE SHIPPING</h4>
                <p>Order over LKR 500000</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">↩️</div>
              <div className="feature-text">
                <h4>07 DAYS RETURN</h4>
                <p>07 days guarantee</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="footer-main">
        <Container className="inner-container footer-bottom">
          <div className="footer-logo">
            <h3>DriveProX</h3>
            <p>Powering Every Mile</p>
          </div>

          <div className="footer-contact">
            <p>📧 support@driveprox.com</p>
            <p>📞 (+94) 76 7744 000</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Become a Partner</a>
                </li>
                <li>
                  <a href="#">Your Dream Car</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">My Account</a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <Container className="inner-container footer-copyright">
          <p>© 2023 DriveProX. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Refunds & Returns</a>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
