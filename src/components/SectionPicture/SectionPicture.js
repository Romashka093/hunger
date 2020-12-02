import React from 'react';
import './SectionPicture.scss';

function SectionPicture({ image, left }) {
  return (
    <div className="Image">
      <div className="Image__wrapper">
        {/*  eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img className="Image-content" src={image} alt="section image" />
        <p className={left ? 'Image-hover-left' : 'Image-hover-right'}></p>
      </div>
    </div>
  );
}

export default SectionPicture;
