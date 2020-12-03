import React from 'react';
import languages from '../../languages';
import './WorkingHours.scss';

function WorkingHours() {
  return (
    <>
      {' '}
      <div className="Working">
        <div className="Working__hours">{`${languages.eng.workingWeekDays} ${languages.eng.workingWeekHours}, ${languages.eng.workingWeekendsDays} ${languages.eng.workingWeekendsHours}`}</div>
      </div>
    </>
  );
}

export default WorkingHours;
