import React, { Component } from 'react';
import specialties from '../../helpers/specialties.json';
import Specialty from '../../components/Specialty/Specialty';
import languages from '../../languages';
import './Specialties.scss';
import Controls from '../../components/Controls/Controls';

class Specialties extends Component {
  state = {
    activeIndex: this.props.initialValue,
    specialties: specialties,
  };

  handleNextItem = () => {
    this.setState(prevState => {
      return { activeIndex: prevState.activeIndex + this.props.step };
    });
  };

  handlePrevItem = () => {
    this.setState(prevState => {
      return { activeIndex: prevState.activeIndex - this.props.step };
    });
  };
  handleChangeSlide = evt => {
    this.setState({
      activeIndex: Number(evt.target.id),
    });
  };
  render() {
    const { activeIndex, specialties } = this.state;

    return (
      <section id={languages.eng.galerie}>
        <h2>Specialties</h2>
        <div className="Photo"></div>
        <Specialty specialty={specialties[activeIndex]} />

        <div className="Controls">
          <button
            onClick={this.handleNextItem}
            disabled={activeIndex === specialties.length - 1}
          >
            next
          </button>
          <button onClick={this.handlePrevItem} disabled={activeIndex === 0}>
            prev
          </button>
        </div>
        <Controls
          specialties={specialties}
          handleChangeSlide={this.handleChangeSlide}
        />
      </section>
    );
  }
}

export default Specialties;
