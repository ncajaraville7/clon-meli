import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './ProductDetail.css';

import Aside from './Aside';
import Images from './Images';

const ProductDetail = () => {
  const [detail, setDetail] = useState([]);
  const { productId } = useParams();

  const getDetails = async () => {
    const response = await fetch(
      `https://api.mercadolibre.com/items/${productId}`
    );
    const data = await response.json();
    setDetail(data);
    // console.log(data);
  };

  useEffect(() => {
    getDetails();
  }, [productId]);

  return (
    <div className="product-detail container">
      <Images detail={detail} />
      <Aside detail={detail} />
    </div>
  );
};

export default ProductDetail;
