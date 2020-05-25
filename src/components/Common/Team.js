import React, { Component } from "react";
import Member from "./Member";
import img1 from "../img/team/1.jpg";
import img2 from "../img/team/2.jpg";
import img3 from "../img/team/3.jpg";
const memberlist = [
  {
    name: "Kay Garland",
    image: img1,
    role: "Lead Designer",
  },
  {
    name: "Larry Parker",
    image: img2,
    role: "Lead Marketer",
  },
  {
    name: "Diana Petersen",
    image: img3,
    role: "Lead Devloper",
  },
];
class Team extends Component {
  render() {
    return (
      <section class="page-section bg-light" id="team">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 class="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div class="row">
            {memberlist.map((ele, index) => {
              return <Member {...ele} key={index} />;
            })}
          </div>
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <p class="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Team;
