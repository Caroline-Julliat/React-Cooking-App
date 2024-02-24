import React from 'react';

function Footer() {
    return (
        <footer>
            <h1>React Cook</h1>
            <div className="social-network">
      <ul className="content">
        <a
          href="https://www.facebook.com"
          target="_blank"
          
        >
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
        >
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>
      </ul>
    </div>
        </footer>
    );
}

export default Footer;