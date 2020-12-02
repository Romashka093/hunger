import React from 'react';
import { useMediaPredicate } from 'react-media-hook';
import BookForm from '../../components/BookForm/BookForm';
import image from '../../assets/img/slides/about-img.png';
import SectionPicture from '../../components/SectionPicture/SectionPicture';
import languages from '../../languages';
import './Booking.scss';

function Booking({ handlerFormSubmit }) {
  const tablet = useMediaPredicate('(min-width: 1024px)');
  return (
    <>
      <section id={languages.eng.booking} className="Booking">
        <BookForm handlerFormSubmit={handlerFormSubmit} />
        {tablet && <SectionPicture image={image} left={false} />}
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
