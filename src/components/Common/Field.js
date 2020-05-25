import React, { Component } from "react";

class Field extends Component {
  render() {
    return (
      <div className="form-group">
        {this.props.elementName === "input" ? (
          <input
            className="form-control"
            id={this.props.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
            required="required"
            name={this.props.name}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
          />
        ) : (
          <div className="form-group form-group-textarea mb-md-0">
            <textarea
              className="form-control"
              id={this.props.name}
              placeholder={this.props.message}
              required="required"
              name={this.props.name}
              onChange={this.props.onChange}
              onBlur={this.props.onBlur}
            />
          </div>
        )}
        <p className="help-block text-danger">
          {this.props.touched && this.props.errors && (
            <span>This field is required</span>
          )}
        </p>
      </div>
    );
  }
}
export default Field;
