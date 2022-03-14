import React from 'react';
import Card from './Card';

import './ProductListContainer.css';

const ProductListContainer = ({ searchValue, items }) => {
  return (
    <div className="product-list">
      {items.length > 0 ? (
        <article className="product-list__container">
          <ol className="product-list__container__items">
            {items.length > 0 &&
              items.map((item) => <Card key={item.id} {...item} />)}
          </ol>
        </article>
      ) : (
        <div className="search-text">
          <h2>Ingrese un producto...</h2>
        </div>
      )}
    </div>
  );
};

export default ProductListContainer;
