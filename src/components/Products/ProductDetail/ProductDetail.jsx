import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './ProductDetail.css';

import { formatNumber } from '../../../helpers/formatNumber';

import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { HiOutlineTruck } from 'react-icons/hi';
import { IoReturnDownBack } from 'react-icons/io5';

const ProductDetail = () => {
  const [detail, setDetail] = useState([]);
  const { productId } = useParams();

  const getDetails = async () => {
    const response = await fetch(
      `https://api.mercadolibre.com/items/${productId}`
    );
    const data = await response.json();
    setDetail(data);
    console.log(data);
  };

  useEffect(() => {
    getDetails();
  }, [productId]);

  const { sold_quantity, title, price } = detail;
  const calculateRates = Math.trunc(price / 12);

  return (
    <div className="product-detail">
      <p>hola</p>
    </div>
  );
};

export default ProductDetail;
