import React, { useState } from 'react';

import './Navbar.css';

import logo from '../../assets/logo.png';
import publicity from '../../assets/publicity.webp';

import { AiOutlineSearch } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { IoCartOutline } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';

import MenuResponsive from './MenuResponsive';

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const menuToggle = () => {
    if (!hamburgerMenu) {
      setHamburgerMenu(true);
      return;
    }
    setHamburgerMenu(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__menu container">
          <div className="navbar__menu__logo">
            <img src={logo} alt="logo meli" />
          </div>
          <form className="navbar__menu__form">
            <div className="navbar__menu__form__input-group">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Buscar productos, marcas y más..."
              />
              <button>
                <AiOutlineSearch className="navbar__menu__form__input-group__icon" />
              </button>
            </div>
          </form>
          <div className="navbar__publicity">
            <img src={publicity} alt="suscribete" />
          </div>
          <div className="navbar__hamburger-menu">
            <GiHamburgerMenu onClick={menuToggle} />
          </div>
        </div>
        <div className="navbar__links container">
          <div className="navbar__links__ubication">
            <div className="navbar__links__ubication__container">
              <BiMap />
              <div className="navbar__links__ubication__container__text">
                <p>Enviar a</p>
                <p>Buenos Aires</p>
              </div>
            </div>
          </div>
          <ul className="navbar__links__list">
            <li>Categorías</li>
            <li>Ofertas</li>
            <li>Historial</li>
            <li>Supermercado</li>
            <li>Moda</li>
            <li>Vender</li>
            <li>Ayuda</li>
          </ul>

          <ul className="navbar__links__list user-data">
            <li>Creá tu cuenta</li>
            <li>Ingresá</li>
            <li>Mis Compras</li>
            <li>
              <IoCartOutline />
            </li>
          </ul>
        </div>
      </div>
      {hamburgerMenu && <MenuResponsive />}
    </>
  );
};

export default Navbar;
