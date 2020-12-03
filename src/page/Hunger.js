import React, { Component } from 'react';
import menuList from '../helpers/menu';
import Header from '../sections/Header';
import Booking from '../sections/Booking';
import Specialties from '../sections/Specialties';
import Menu from '../sections/Menu/Menu';
import PrivateEvents from '../sections/PrivateEvents';
import './Hunger.scss';

class Hunger extends Component {
  state = {
    isOpenMenu: false,
    minutes: 14,
    seconds: 0,
    initialValue: 0,
    menuList: [],
  };

  componentDidMount() {
    this.setState({ menuList });
    this.timeInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.timeInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }
  handlerFormSubmit = data => {
    console.log('form data: ', data);
  };
  handleOpenMenu = evt => {
    if (evt.target) {
      this.setState({ isOpenMenu: !this.state.isOpenMenu });
    }
  };
  render() {
    const { isOpenMenu, minutes, seconds, initialValue, menuList } = this.state;

    return (
      <>
        <main className="Wrapper">
          <div className="Wrapper__container">
            <Header
              minutes={minutes}
              seconds={seconds}
              isOpenMenu={isOpenMenu}
              handleOpenMenu={this.handleOpenMenu}
            />
            <Booking handlerFormSubmit={this.handlerFormSubmit} />
            <Specialties step={1} initialValue={initialValue} />
            <Menu menu={menuList} />
            <PrivateEvents />
          </div>
        </main>
      </>
    );
  }
}

export default Hunger;
