import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './ProductDetail.css';

import BuyDetail from './Aside/BuyDetail';
import SellerInfo from './Aside/SellerInfo';
import Images from './Main/Images';
import SellerPublications from './Main/SellerPublications';

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

  return (
    <div className="product-detail container">
      <main>
        {detail.pictures && <Images detail={detail} />}
        <SellerPublications detail={detail} />
      </main>
      <aside>
        {detail.shipping && <BuyDetail detail={detail} />}
        <SellerInfo detail={detail} />
      </aside>
    </div>
  );
};

export default ProductDetail;
