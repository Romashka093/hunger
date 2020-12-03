import React, { Component } from 'react';
import languages from '../../languages';
import specialties from '../../helpers/specialties.json';
import image from '../../assets/img/slides/slide-img.png';
import Specialty from '../../components/Specialty';
import Controls from '../../components/Controls';
import SectionPicture from '../../components/SectionPicture';
import './Specialties.scss';

class Specialties extends Component {
  state = {
    activeIndex: this.props.initialValue,
    specialties: specialties,
    image: image,
  };

  // handleNextItem = () => {
  //   this.setState(prevState => {
  //     return { activeIndex: prevState.activeIndex + this.props.step };
  //   });
  // };

  // handlePrevItem = () => {
  //   this.setState(prevState => {
  //     return { activeIndex: prevState.activeIndex - this.props.step };
  //   });
  // };
  handleChangeSlide = evt => {
    this.setState({
      activeIndex: Number(evt.target.id),
    });
  };
  render() {
    const { activeIndex, specialties, image } = this.state;

    return (
      <section className="Specialties" id={languages.eng.galerie}>
        <h2 className="Specialties__header">{languages.eng.specialties}</h2>
        <div className="Specialties__container">
          <SectionPicture image={image} left={true} />
          <Specialty specialty={specialties[activeIndex]} />

          {/* <div>
          <button onClick={this.handlePrevItem} disabled={activeIndex === 0}>
            next
          </button>
          <button
            onClick={this.handleNextItem}
            disabled={activeIndex === specialties.length - 1}
          >
            prev
          </button>
        </div> */}
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
