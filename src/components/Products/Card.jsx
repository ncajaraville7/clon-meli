import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

const Card = ({ title, price, thumbnail, id }) => {
  const formatNumber = new Intl.NumberFormat('es-AR').format(price);

  return (
    <Link to={'product/' + id}>
      <li className="card">
        <div className="card__product">
          <div className="card__product__image">
            <img src={thumbnail} alt={title} />
          </div>
          <div className="card__product__content">
            <h3>{title}</h3>
            <h4>${formatNumber}</h4>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default Card;
