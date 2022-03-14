import React from 'react';
import Card from './Card';

import './ProductListContainer.css';

const ProductListContainer = ({ searchValue, items }) => {
  return (
    <div className="product-list">
      <article className="product-list__container">
        <ol className="product-list__container__items">
          {items.length > 0 &&
            items.map((item) => <Card key={item.id} {...item} />)}
        </ol>
      </article>
    </div>
  );
};

export default ProductListContainer;
