import React, { useState, useEffect } from 'react';

import './Description.css';

const Description = ({ detail }) => {
  const [description, setDescription] = useState('');
  const { id } = detail;

  const getDescription = async () => {
    const response = await fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    const data = await response.json();
    setDescription(data.plain_text);
  };

  useEffect(() => {
    getDescription();
  }, []);

  return (
    <>
      {description && (
        <div className="description">
          <h2>Descripción</h2>
          <p>{description}</p>
        </div>
      )}
    </>
  );
};

export default Description;
