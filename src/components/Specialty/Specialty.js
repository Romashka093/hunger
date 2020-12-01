import React from 'react';
import './Specialty.scss';

function Specialty({ specialty }) {
  const { id, title, descriptions, text } = specialty;

  return (
    <ul className="Specialty">
      <li className="Specialty__item" key={id}>
        <article>
          <h3>{title}</h3>
          <p>{descriptions}</p>
          <p>{text}</p>
        </article>
      </li>
    </ul>
  );
}

export default Specialty;
