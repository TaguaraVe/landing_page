import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';

import logo from '../../assets/image/logos/td-trans.png';

const Header = () => {
  const [showMobileMenu, SetShowMobileMenu] = useState(false);

  const handleShowToggleMenu = () => {
    SetShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="w-full h-[80px] py-0 px-8 sticky top-0 md:px-20 z-10 myFlex bg-darkBlue text-myWhite ">
      <div className="myFlex w-full">
        <div className="w-[70px]">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className="myFlex">
          <ul
            className={`list-none justify-center md:justify-between myFlex text-center ease-in-out duration-300 uppercase mobileMenu md:desktopMenu ${
              showMobileMenu ? 'opacity-100 left-0' : 'md:left-0'
            }`}
          >
            <li
              className="text-center mt-8 md:mt-0 text-3xl md:text-base text-myWhite"
              onClick={handleShowToggleMenu}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-primary' : ' text-myWhite hover:text-primary'
                }
              >
                Inicio
              </NavLink>
            </li>

            <li
              className="text-center mt-8 md:mt-0 text-3xl md:text-base "
              onClick={handleShowToggleMenu}
            >
              <NavLink
                to="#about"
                className={({ isActive }) =>
                  isActive ? 'text-primary' : ' text-myWhite hover:text-primary'
                }
              >
                Nosotros
              </NavLink>
            </li>

            <li
              className="text-center mt-8 md:mt-0 text-3xl md:text-base "
              onClick={handleShowToggleMenu}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? 'text-primary' : ' text-myWhite hover:text-primary'
                }
              >
                Servicios
              </NavLink>
            </li>

            <li
              className="text-center mt-8 md:mt-0 text-3xl md:text-base "
              onClick={handleShowToggleMenu}
            >
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'text-primary' : ' text-myWhite hover:text-primary'
                }
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="myFlex">
        <div
          className="text-2xl cursor-pointer md:hidden"
          onClick={handleShowToggleMenu}
        >
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
