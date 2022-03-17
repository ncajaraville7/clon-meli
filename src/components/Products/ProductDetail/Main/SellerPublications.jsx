import React, { useState, useEffect } from 'react';

import './SellerPublication.css';

import { formatNumber } from '../../../../helpers/formatNumber';

const SellerPublications = ({ detail }) => {
  const [publications, setPublications] = useState([]);
  const { seller_id, site_id, category_id } = detail;

  const getSellerPublications = async () => {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?seller_id=${seller_id}&category=${category_id}`
    );
    const data = await response.json();
    setPublications(data.results);
    console.log(data);
  };

  useEffect(() => {
    getSellerPublications();
  }, [publications]);

  const va = publications.slice(0, 3);
  return (
    <div className="publication-seller">
      <h2>Publicaciones del vendedor</h2>
      <div className="publication-seller__products">
        {va.map((item) => (
          <ul key={item.id} className="publication-seller__products__card">
            <div className="publication-seller__products__card__image">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className="publication-seller__products__card__text">
              <li>${formatNumber(item.price)}</li>
              <li>{item.title}</li>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SellerPublications;
