import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
let Logo = "/images/logo.png";

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDropdown() {
    setIsDropdownOpen(isDropdownOpen? false : true);
  }

    return (
      <header className="fixed w-full px-4 lg:px-100 z-30 lg:h-140 flex items-center bg-white">
        <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
          <img
            src={process.env.PUBLIC_URL + Logo}
            alt="logo"
            width={"12%"}
            className="mylogo"
          />
          <ul className="nav flex space-x-10 justify-start">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <button onClick={toggleDropdown}>Services</button>
              {isDropdownOpen && (
                <ul>
                  <li className='nav-item'>
                    <NavLink
                      to="/assessment"
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      Assessment
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <NavLink
                to="contact"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>


        </div>
      </header>
    );
  }

export default NavBar;