import React from 'react'

const Navbar = () => {
  return (
    <header className="header">
      <div className="navigation">
          <a href="/" className="navigation--brand"><h4>Movie App</h4></a>
      </div>

      <nav className="navigation--nav">
        <ul className="navigation--list">
          <li className="navigation--item">
            <a href="/about" className="navigation--link">About Me</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
