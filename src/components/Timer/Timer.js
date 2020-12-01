import React from 'react';
import languages from '../../languages';
import './Timer.scss';

function Timer({ minutes, seconds }) {
  return (
    <>
      {minutes === 0 && seconds === 0 ? (
        <div className="Timer">
          <div className="Timer__countdown">{languages.eng.timer} 0:00</div>
        </div>
      ) : (
        <div className="Timer">
          <div className="Timer__countdown">
            {languages.eng.timer} {minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </div>
        </div>
      )}
    </>
  );
}

export default Timer;
