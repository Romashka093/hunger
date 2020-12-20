import React from 'react';
import { useMediaPredicate } from 'react-media-hook';
import languages from '../../languages';
import image from '../../assets/img/slides/about-img.png';
import BookForm from '../../components/BookForm';
import Сonfirmation from '../../components/Сonfirmation';
import SectionPicture from '../../components/SectionPicture';
import './Booking.scss';

function Booking({ handlerFormSubmit, isTableReserved, guestInfo }) {
  const tablet = useMediaPredicate('(min-width: 1024px)');
  return (
    <>
      <section id={languages.eng.booking} className="Booking-section">
        <div className="Booking-section-wrap">
          {isTableReserved ? (
            <Сonfirmation guestInfo={guestInfo} />
          ) : (
            <BookForm handlerFormSubmit={handlerFormSubmit} />
          )}

          {tablet && <SectionPicture image={image} left={false} />}
        </div>
        <div className="Booking-section__contacts">
          <p>
            {languages.eng.workingWeekDays}{' '}
            <span className="Booking-section__contacts-numbers">
              {languages.eng.workingWeekHours}
            </span>
            , {languages.eng.workingWeekendsDays}{' '}
            <span className="Booking-section__contacts-numbers">
              {languages.eng.workingWeekendsHours}
            </span>
            , {languages.eng.phone}:
            <span className="Booking-section__contacts-numbers">
              {' '}
              <a
                className="Booking-section__contacts-numbers-link"
                href={`tel:${languages.eng.firstPhoneForBooking}`}
              >
                {languages.eng.firstPhoneForBooking}
              </a>{' '}
              /{' '}
              <a
                className="Booking-section__contacts-numbers-link"
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
