import React from 'react';
import languages from '../../languages';
import './Сonfirmation.scss';

function Сonfirmation({ guestInfo }) {
  const { name, phone, day, email, people, time } = guestInfo;
  return (
    <div className="Сonfirmation">
      <h2 className="Сonfirmation__title">Hello {name}!</h2>
      <p className="Сonfirmation__content">
        your table for {people} {people > 1 ? 'persons' : 'person'} is reserved,
      </p>
      <p className="Сonfirmation__content">
        and we will happy to see you in our place on {day} from {time}.
      </p>
      <p className="Сonfirmation__content">
        <br />
        If you will have some changes, please, feel free and call to us:{' '}
        <a
          className="Сonfirmation__content-link"
          href={`tel:${languages.eng.firstPhoneForBooking}`}
        >
          {languages.eng.firstPhoneForBooking}
        </a>{' '}
        /{' '}
        <a
          className="Сonfirmation__content-link"
          href={`tel:${languages.eng.secondPhoneForBooking}`}
        >
          {languages.eng.secondPhoneForBooking}
        </a>
        .
      </p>
      <br />
      <p className="Сonfirmation__content">
        If we will have some changes, we will lete you know by phone {phone} or
        send you an email to {email}.
      </p>
    </div>
  );
}

export default Сonfirmation;
