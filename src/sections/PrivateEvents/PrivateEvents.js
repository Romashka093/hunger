import React from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { Link } from 'react-router-dom';
import languages from '../../languages';
import routes from '../../routes';
import weddings from '../../assets/img/slides/weddings-img.png';
import corporate from '../../assets/img/slides/corporate-pzrties-img.png';
import SectionPicture from '../../components/SectionPicture';
import './PrivateEvents.scss';

function PrivateEvents() {
  const tablet = useMediaPredicate('(min-width: 768px)');
  return (
    <section className="Events" id={languages.eng.events}>
      <h2 className="Events__header">{languages.eng.privateEvents}</h2>
      <div className="Events__types">
        <Link to={routes.main}>
          <SectionPicture
            image={weddings}
            left={true}
            title={languages.eng.eventsWedding}
          />
        </Link>
        <Link to={`#${languages.eng.home}`}>
          <SectionPicture
            image={corporate}
            left={false}
            title={languages.eng.eventsCorporate}
          />
        </Link>
      </div>
      <div className="Events__contacts">
        <p className="Events__contacts-numbers">
          <span>{languages.eng.bookingFor}</span>{' '}
          <a
            className="Events__contacts-numbers-link"
            href={`tel:${languages.eng.firstPhoneForBooking}`}
          >
            {languages.eng.firstPhoneForBooking}
          </a>{' '}
          {tablet && '/ '}
          <a
            className="Events__contacts-numbers-link"
            href={`tel:${languages.eng.secondPhoneForBooking}`}
          >
            {languages.eng.secondPhoneForBooking}
          </a>{' '}
          <span>{languages.eng.orRedirect}</span>
        </p>
      </div>
    </section>
  );
}

export default PrivateEvents;
