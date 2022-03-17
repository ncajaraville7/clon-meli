import React, { useState } from 'react';

import './Images.css';

const Images = ({ detail }) => {
  const [pictureMain, setPictureMain] = useState([]);

  const { pictures } = detail;

  console.log(pictures);

  const handleHover = (idImage) => {
    const findImage = pictures.find((item) => item.id === idImage);
    setPictureMain(findImage);
  };

  return (
    <div className="images">
      <div className="images__carrousel">
        {pictures !== undefined &&
          pictures.map((picture) => (
            <img
              src={picture.secure_url}
              alt={detail.title}
              key={picture.id}
              onMouseEnter={() => handleHover(picture.id)}
            />
          ))}
      </div>
      <div className="images__main">
        <img src={pictureMain.secure_url} alt={detail.title} />
      </div>
    </div>
  );
};

export default Images;
