import React from 'react';
import { navlinks } from '../constants';

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple-logo" />

        <ul>
          {navlinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="felx-center gap-3">
          <button>
            <img src="/search.svg" alt="search-icon" />
          </button>
          <button>
            <img src="/cart.svg" alt="cart-icon" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
