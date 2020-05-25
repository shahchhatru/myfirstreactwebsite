import React, { Component } from "react";
import Field from "../Common/Field";
import { withFormik } from "formik";
const inputfield = [
  [
    {
      name: "name",
      elementName: "input",
      type: "text",
      placeholder: "Your name",
    },
    {
      name: "email",
      elementName: "input",
      type: "email",
      placeholder: "Your email",
    },
    {
      name: "phone",
      elementName: "input",
      type: "text",
      placeholder: "Your phone number",
    },
  ],
  [
    {
      name: "message",
      elementName: "textarea",
      type: "text",
      placeholder: "Your message here",
    },
  ],
];
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }

  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row align-items-stretch mb-5">
              {inputfield.map((section, sectionIndex) => {
                return (
                  <div className="col-md-6" key={sectionIndex}>
                    {section.map((ele, index) => {
                      return (
                        <Field
                          {...ele}
                          key={index}
                          value={this.props.value}
                          name={ele.name}
                          onChange={this.props.handleChange}
                          onBlur={this.props.handleBlur}
                          touched={this.props.touched[ele.name]}
                          errors={this.props.errors[ele.name]}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="clearfix"></div>
            <div className="text-center">
              <div id="success"></div>
              <button
                className="btn btn-primary btn-xl text-uppercase"
                id="sendMessageButton"
                type="submit"
                onClick={this.props.handleSubmit}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    message: "",
  }),
  validate: (values) => {
    const errors = {};

    Object.keys(values).map((v) => {
      if (!values[v]) {
        errors[v] = "required";
      }
    });
    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    alert("you have submitted");
  },
})(Contact);
