import React from 'react';
import './SectionPicture.scss';

function SectionPicture({ image, left, title }) {
  return (
    <div className="Image">
      <div className="Image__wrapper">
        {/*  eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img className="Image-content" src={image} alt="section image" />
        <p className={left ? 'Image-hover-left' : 'Image-hover-right'}></p>
        {title && (
          <div className="Image-title-wrapper">
            <p className={left ? 'Image-title-left' : 'Image-title-right'}>
              {title}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SectionPicture;
