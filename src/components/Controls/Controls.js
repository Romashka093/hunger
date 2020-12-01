import React from 'react';
import './Controls.scss';

function Controls({ specialties, handleChangeSlide }) {
  return (
    <>
      {specialties.length && (
        <ul>
          {specialties.map((item, index) => {
            return (
              <li key={item.id} id={index} onClick={handleChangeSlide}>
                {item.title}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Controls;
