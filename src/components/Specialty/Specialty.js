import React from 'react';
import './Specialty.scss';

function Specialty({ specialty }) {
  const { id, title, descriptions, text } = specialty;

  return (
    <ul className="Specialty">
      <li className="Specialty__item" key={id}>
        <article className="Specialty__item-article">
          <h3 className="Specialty__item-header">{title}</h3>
          <p className="Specialty__item-descriptions">{descriptions}</p>
          <p className="Specialty__item-text">{text}</p>
        </article>
      </li>
    </ul>
  );
}

export default Specialty;
