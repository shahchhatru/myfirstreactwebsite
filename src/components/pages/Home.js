import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../img/header-bg.jpg";
//resuable components
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import Team from "../Common/Team";
class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome to our studio"
          subtitle="Nice to meet you"
          buttonText="Tell me more"
          link="/services"
          showButton={true}
          image={image}
        />
        <Services />
        <Portfolio />
        <Team />
      </div>
    );
  }
}
export default Home;
