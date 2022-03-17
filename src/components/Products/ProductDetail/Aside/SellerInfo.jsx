import React from 'react';

import './SellerInfo.css';

import { GoLocation } from 'react-icons/go';

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
        <div className="product-detail-aside__reputation__stats"></div>
      </div>
    </div>
  );
};

export default SellerInfo;
