import React from 'react';

import './SellerInfo.css';

import { FaCheckCircle } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { MdTimer } from 'react-icons/md';
import { BiMessage } from 'react-icons/bi';

const SellerInfo = ({ detail }) => {
  const { seller_address } = detail;

  return (
    <div className="product-detail-aside ubication">
      <h2>Información sobre el vendedor</h2>
      <div className="product-detail-aside__ubication">
        <GoLocation />
        <div className="product-detail-aside__ubication__content">
          <p>Ubicación</p>
          {seller_address !== undefined && (
            <p>
              {seller_address.city.name}, {seller_address.state.name}
            </p>
          )}
        </div>
      </div>
      <div className="product-detail-aside__reputation">
        <div className="product-detail-aside__reputation__content">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="product-detail-aside__reputation__stats">
          <div className="product-detail-aside__reputation__stats__content sale">
            <strong>1274</strong>
            <div className="product-detail-aside__reputation__stats__content__text">
              <p>Ventas en los últimos 60 días</p>
            </div>
          </div>

          <div className="product-detail-aside__reputation__stats__content icon">
            <BiMessage className="product-detail-aside__iconOne" />
            <FaCheckCircle className="product-detail-aside__iconTwo" />
            <div className="product-detail-aside__reputation__stats__content__text">
              <p>Brinda buena atención</p>
            </div>
          </div>

          <div className="product-detail-aside__reputation__stats__content icon">
            <MdTimer className="product-detail-aside__iconOne" />
            <FaCheckCircle className="product-detail-aside__iconTwo" />
            <div className="product-detail-aside__reputation__stats__content__text">
              <p>Despacha sus productos a tiempo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
