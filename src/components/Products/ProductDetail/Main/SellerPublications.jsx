import React, { useState, useEffect } from 'react';

import './SellerPublication.css';

import { formatNumber } from '../../../../helpers/formatNumber';

const SellerPublications = ({ detail }) => {
  const [publications, setPublications] = useState([]);
  const { seller_id, category_id } = detail;

  const getSellerPublications = async () => {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?seller_id=${seller_id}&category=${category_id}`
    );
    const data = await response.json();
    setPublications(data.results);
  };

  useEffect(() => {
    getSellerPublications();
  }, [category_id]);

  const productSlice = publications.slice(0, 3);

  return (
    <div className="publication-seller">
      <h2>Publicaciones del vendedor</h2>
      <div className="publication-seller__products">
        {productSlice.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.thumbnail} alt={item.title} />

            <div className="product-card__text">
              <p>${formatNumber(item.price)}</p>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerPublications;
