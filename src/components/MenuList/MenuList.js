import React from 'react';
import './MenuList.scss';

function MenuList({ menuList }) {
  return (
    <>
      {menuList !== undefined &&
        menuList.map(item => (
          <li className="Menu__item" key={item.id} id={item.id}>
            <div className="Menu__item-dish">
              <p className="Menu__item-dish-name">{item.dishName}</p>
              <div className="Menu__item-dish-price">
                <span>{item.dishPrice}</span>
                <span className="Menu__item-dish-price-space"> </span>
                <span>{item.dishPriceCurrency}</span>
              </div>
            </div>
            <div className="Menu__item-description">
              <p className="Menu__item-description-text">
                {item.dishDescriptions}
              </p>
            </div>
          </li>
        ))}
    </>
  );
}

export default MenuList;
