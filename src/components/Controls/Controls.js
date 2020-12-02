import React from 'react';
import './Controls.scss';

function Controls({ specialties, handleChangeSlide }) {
  return (
    <>
      {specialties.length && (
        <ul className="Control">
          {specialties.map((item, index) => {
            return (
              <li
                className="Control__item"
                key={item.id}
                onClick={handleChangeSlide}
              >
                <button id={index} className="Control__item-button"></button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Controls;
