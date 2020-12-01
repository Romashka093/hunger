import React from 'react';
import BookForm from '../../components/BookForm/BookForm';
import languages from '../../languages';
import './Booking.scss';

function Booking({ handlerFormSubmit }) {
  return (
    <>
      <section id={languages.eng.booking} className="Booking">
        <BookForm handlerFormSubmit={handlerFormSubmit} />
        <div className="Booking__contacts">
          <p>
            {languages.eng.workingWeekDays}{' '}
            <span className="Booking__contacts-numbers">
              {languages.eng.workingWeekHours}
            </span>
            , {languages.eng.workingWeekendsDays}{' '}
            <span className="Booking__contacts-numbers">
              {languages.eng.workingWeekendsHours}
            </span>
            , {languages.eng.phone}:
            <span className="Booking__contacts-numbers">
              {' '}
              <a
                className="Booking__contacts-numbers-link"
                href={`tel:${languages.eng.firstPhoneForBooking}`}
              >
                {languages.eng.firstPhoneForBooking}
              </a>{' '}
              /{' '}
              <a
                className="Booking__contacts-numbers-link"
                href={`tel:${languages.eng.secondPhoneForBooking}`}
              >
                {languages.eng.secondPhoneForBooking}
              </a>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Booking;
