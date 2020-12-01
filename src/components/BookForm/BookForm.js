import React, { Component } from 'react';
import languages from '../../languages';
import './BookForm.scss';

class BookForm extends Component {
  state = {
    name: '',
    phone: '',
    day: '',
    email: '',
    people: '',
    time: '',
  };
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.handlerFormSubmit(this.state);
    this.reset();
  };
  reset() {
    this.setState({
      name: '',
      phone: '',
      day: '',
      email: '',
      people: '',
      time: '',
    });
  }

  render() {
    const { name, phone, day, email, people, time } = this.state;
    return (
      <div className="Booking">
        <form
          className="Booking__form"
          action=""
          method="GET"
          id="tableOrdered"
          onSubmit={this.handleSubmit}
        >
          <h2 className="Booking__form-header">{languages.eng.bookingForm}</h2>
          <ul className="Booking__form-wrapper">
            <li className="Booking__form-item">
              <input
                className="Booking__form-item-input"
                onChange={this.handleChange}
                type="text"
                placeholder={languages.eng.name}
                required
                value={name}
                name="name"
              />
            </li>
            <li className="Booking__form-item">
              <input
                className="Booking__form-item-input"
                onChange={this.handleChange}
                type="email"
                placeholder={languages.eng.email}
                required
                value={email}
                name="email"
              />
            </li>
            <li className="Booking__form-item">
              <input
                className="Booking__form-item-input"
                onChange={this.handleChange}
                type="tel"
                placeholder={languages.eng.phone}
                required
                value={phone}
                name="phone"
              />
            </li>
            <li className="Booking__form-item">
              <select
                className="Booking__form-item-input"
                onChange={this.handleChange}
                form="tableOrdered"
                required
                name="people"
                id=""
                value={people}
              >
                <option value="0">{languages.eng.people}</option>
                <option value="1">One {languages.eng.person}</option>
                <option value="2">Two {languages.eng.persons}</option>
                <option value="3">Three {languages.eng.persons}</option>
                <option value="4">Four {languages.eng.persons}</option>
                <option value="5">Fife {languages.eng.persons}</option>
                <option value="6">Six {languages.eng.persons}</option>
              </select>
            </li>
            <li className="Booking__form-item">
              <input
                className="Booking__form-item-input"
                onChange={this.handleChange}
                type="text"
                placeholder={languages.eng.date}
                required
                value={day}
                name="day"
                // pattern
              />
            </li>
            <li className="Booking__form-item">
              <select
                className="Booking__form-item-input"
                onChange={this.handleChange}
                form="tableOrdered"
                required
                name="time"
                id=""
                value={time}
              >
                <option value="0">{languages.eng.time}</option>
                <option value="8PM-9PM">8PM - 9PM</option>
                <option value="9PM-10PM">9PM - 10PM</option>
                <option value="10PM-11PM">10PM - 11PM</option>
                <option value="11PM-12AM">11PM - 12AM</option>
                <option value="12AM-1AM">12AM - 1AM</option>
                <option value="1AM-2AM">1AM - 2AM</option>
                <option value="2AM-3AM">2AM - 3AM</option>
              </select>
            </li>
          </ul>
          <button className="Booking__form-button">
            {languages.eng.bookNow}
          </button>
        </form>
      </div>
    );
  }
}

export default BookForm;
