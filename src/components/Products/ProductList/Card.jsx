import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

import { formatNumber } from '../../../helpers/formatNumber';

const Card = ({ title, price, thumbnail, id }) => {
  return (
    <Link to={'product/' + id}>
      <li className="card">
        <div className="card__product">
          <div className="card__product__image">
            <img src={thumbnail} alt={title} />
          </div>
          <div className="card__product__content">
            <h3>{title}</h3>
            <h4>${formatNumber(price)}</h4>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default Card;
