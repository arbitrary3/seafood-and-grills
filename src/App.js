import Navbar from './Navbar.js';
import Hero from './Hero.js';
import About from './About.js';
import TopProducts from './TopProducts.js';
import Reviews from './Reviews.js';
import Footer from './Footer.js';
import './App.css';

import React from 'react';
import { useIsVisible } from './checkVisible.js';
import { useRef } from 'react';

function AboutWithVisibility({ toggleNavbar }) {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  // Notify parent (App) about visibility change
  React.useEffect(() => {
    toggleNavbar(!isVisible);
  }, [isVisible, toggleNavbar]);

  return (
    <div ref={ref}>
      <About />
      <Footer />
    </div>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      logInId: 0,
      cartAmount: [0,0,0,0],
      navBarVisible: true
    }

    this.addToCart = this.addToCart.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  addToCart(index,number) {
    this.setState((previousState) => {
      const updatedCartAmount = [...previousState.cartAmount];
      updatedCartAmount[index] = Math.max(0, updatedCartAmount[index] + number);
      return { cartAmount: updatedCartAmount };
    });
  }

  toggleNavbar(visibility) {
    this.setState({
      navBarVisible: visibility
    })
  }
  

  render() {

    return (
      <div>
        {this.state.navBarVisible ? <Navbar isVisible={this.state.navBarVisible} searchText={this.state.searchText} logInId={this.state.logInId} /> : null}
        <Hero />
        <TopProducts logInId={this.state.logInId} cartAmount={this.state.cartAmount} addToCart={this.addToCart} />
        <AboutWithVisibility toggleNavbar={this.toggleNavbar} />
      </div>
    );
  }
}
