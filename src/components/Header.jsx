import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header-container">
            <div className="logo-container">
                <h1>React Cook</h1>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/accueil">Accueil</Link>
                </li>
                <li>
                  <Link to="/a-propos">A Propos</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
        </header>
    );
}

export default Header;