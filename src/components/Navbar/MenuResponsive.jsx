import './MenuResponsive.css';

import { GrHomeRounded } from 'react-icons/gr';
import {
  MdOutlineLocalOffer,
  MdOutlineHeadsetMic,
  MdOutlineStorefront,
} from 'react-icons/md';
import { AiOutlineClockCircle, AiOutlineUnorderedList } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { IoShirtOutline } from 'react-icons/io5';
import { TiDocumentText } from 'react-icons/ti';
import { GiReceiveMoney } from 'react-icons/gi';
import { HiDownload } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';

const MenuResponsive = () => {
  return (
    <div className="menu-responsive">
      <div className="menu-responsive__user">
        <div className="menu-responsive__user__img">
          <svg width="28" height="35" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.343 33.706l-1.356.64A13.25 13.25 0 0 0 14 26.75c-5.17 0-9.8 2.988-11.978 7.578l-1.356-.643A14.75 14.75 0 0 1 14 25.25a14.75 14.75 0 0 1 13.343 8.456zM14 21.75C8.063 21.75 3.25 16.937 3.25 11S8.063.25 14 .25 24.75 5.063 24.75 11 19.937 21.75 14 21.75zm0-1.5a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5zm0-2.5v-1.5a5.25 5.25 0 1 0 0-10.5v-1.5a6.75 6.75 0 0 1 0 13.5z"
              fill="#BBB"
              fillRule="nonzero"
            ></path>
          </svg>
        </div>
        <div className="menu-responsive__user__content">
          <h3>Bienvenido</h3>
          <p>Ingresa a tu cuenta para ver tus compras, favoritos, etc.</p>
          <div className="menu-responsive__user__content__buttons">
            <button>Ingresa</button>
            <button>Crea tu cuenta</button>
          </div>
        </div>
      </div>
      <ul className="menu-responsive__list">
        <li>
          <GrHomeRounded />
          Inicio
        </li>
        <li>
          <MdOutlineLocalOffer />
          Ofertas
        </li>
        <li>
          <AiOutlineClockCircle />
          Historial
        </li>
        <li>
          <MdOutlineHeadsetMic />
          Ayuda
        </li>
      </ul>

      <ul className="menu-responsive__list">
        <li>
          <BiShoppingBag />
          Supermercado
        </li>
        <li>
          <IoShirtOutline />
          Moda
        </li>
        <li>
          <FaStar />
          Más vendidos
        </li>
        <li>
          <MdOutlineStorefront />
          Tiendas oficiales
        </li>
        <li>
          <AiOutlineUnorderedList />
          Categorías
        </li>
      </ul>
      <ul className="menu-responsive__list">
        <li>
          <TiDocumentText />
          Resumen
        </li>
        <li>
          <GiReceiveMoney />
          Vender
        </li>
      </ul>
      <ul className="menu-responsive__list">
        <li>
          <HiDownload />
          ¡Comprá y vendé con la app!
        </li>
      </ul>
    </div>
  );
};

export default MenuResponsive;
