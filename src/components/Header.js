import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  const navLinks = [
    {
      url: '/about',
      label: 'About' 
    },
    {
      url: '/todos',
      label: 'Todo'
    },
  ]

  return (
    <header>
      <div className="bg-gray-800">
        <nav className="flex justify-between align-end w-11/12 py-3 mx-auto">
          <span className="text-white font-bold">
            <Link to='/'>
              React App
            </Link>
          </span>
          <div>
            {navLinks.map((navLink, index) =>
              <span className="text-white mx-3" key={index}>
                <Link to={navLink.url}>
                  {navLink.label}
                </Link>
              </span>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header