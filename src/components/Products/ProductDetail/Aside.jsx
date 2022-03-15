import React, { useState } from 'react';

import './Aside.css';

import { formatNumber } from '../../../helpers/formatNumber';
import { calculateRates } from '../../../helpers/formatNumber';

import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { HiOutlineTruck } from 'react-icons/hi';
import { IoReturnDownBack, IoShieldCheckmarkOutline } from 'react-icons/io5';
import { BiTrophy } from 'react-icons/bi';

const Aside = ({ detail }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { sold_quantity, title, price, condition, available_quantity } = detail;

  const handleFavorite = () => {
    if (!isFavorite) return setIsFavorite(true);
    setIsFavorite(false);
  };

  return (
    <aside className="product-detail-aside">
      <p>
        {condition === 'new' ? 'Nuevo' : 'Usado'} | {sold_quantity} vendidos
      </p>
      <div className="product-detail-aside__title">
        <h2>{title}</h2>
        {!isFavorite ? (
          <BsHeart onClick={handleFavorite} />
        ) : (
          <BsHeartFill onClick={handleFavorite} />
        )}
      </div>
      <div className="product-detail-aside__price">
        <h3>${formatNumber(price)}</h3>
        <p>en 12x ${calculateRates(price)}</p>
        <p>Ver los medios de pago</p>
      </div>
      <div className="product-detail-aside__shipping">
        <div className="product-detail-aside__shipping__content">
          <HiOutlineTruck />
          <div className="product-detail-aside__shipping__content__text">
            <p>Envío gratis a todo el país</p>
            <p>Conocé los tiempos y las formas de envío.</p>
          </div>
        </div>
        <div className="product-detail-aside__shipping__content">
          <IoReturnDownBack />
          <div className="product-detail-aside__shipping__content__text">
            <p>Devolución gratis</p>
            <p>Tienes 30 días desde que lo recibis.</p>
          </div>
        </div>
      </div>
      <div className="product-detail-aside__stock">
        <h3>Stock Disponible</h3>
        <div className="product-detail-aside__stock__qty">
          <p>Cantidad:</p>
          <p>1 unidad</p>
          <MdKeyboardArrowDown />
          <p>
            ({available_quantity}
            {available_quantity > 1 ? ' disponibles' : ' disponible'})
          </p>
        </div>
      </div>
      <div className="product-detail-aside__buttons">
        <button>Comprar Ahora</button>
        <button>Agregar al carrito</button>
      </div>
      <div className="product-detail-aside__buy">
        <div className="product-detail-aside__buy__content">
          <IoShieldCheckmarkOutline />
          <p>
            <span>Compra protegida, </span>
            recibí el producto que esperabas o te devolvemos tu dinero.
          </p>
        </div>

        <div className="product-detail-aside__buy__content">
          <BiTrophy className="trophy" />
          <p>
            <span>Mercado puntos. </span>
            Sumás 150 puntos.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
