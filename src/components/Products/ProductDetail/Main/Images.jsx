import React, { useState } from 'react';

import './Images.css';

const Images = ({ detail }) => {
  const { pictures } = detail;

  const [pictureMain, setPictureMain] = useState(pictures[0]);

  const handleHover = (idImage) => {
    const findImage = pictures.find((item) => item.id === idImage);
    setPictureMain(findImage);
  };

  let picturesSlice = pictures.slice(0, 9);

  return (
    <div className="images">
      <div className="images__carrousel">
        {picturesSlice.map((picture) => (
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
