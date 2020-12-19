import React from 'react';
import './Controls.scss';

function Controls({
  specialties,
  handleChangeSlide,
  activeIndex,
  handlePrevItem,
  handleNextItem,
}) {
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
                <button
                  id={index}
                  className={
                    activeIndex === index
                      ? 'Control__item-button-active'
                      : 'Control__item-button'
                  }
                ></button>
              </li>
            );
          })}
        </ul>
      )}
      <div className="Arrows">
        <button
          className="Arrows__button"
          onClick={handlePrevItem}
          disabled={activeIndex === 0}
        >
          <span className="Arrows__button-prev"></span>
        </button>
        <button
          className="Arrows__button"
          onClick={handleNextItem}
          disabled={activeIndex === specialties.length - 1}
        >
          <span className="Arrows__button-next"></span>
        </button>
      </div>
    </>
  );
}

export default Controls;
