import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [detail, setDetail] = useState([]);
  const { productId } = useParams();
  // console.log(productId);

  const getDetails = async () => {
    const response = await fetch(
      `https://api.mercadolibre.com/items/${productId}`
    );
    const data = await response.json();
    setDetail(data);
  };

  useEffect(() => {
    getDetails();
  }, [productId]);
  return <div>ProductDetail</div>;
};

export default ProductDetail;
