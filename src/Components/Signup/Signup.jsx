import axios from "axios";
import React, { Component } from "react";
import SignupStyle from "./Signup.module.css";

export default class Signup extends Component {
  user = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };
  getFormData = (event) => {
    this.user[event.target.name] = event.target.value;
    // console.log(this.user);
  };
  sendFormData = async (event) => {
    event.preventDefault();
    let { data } = await axios.post(
      "https://route-egypt-api.herokuapp.com/signup",
      this.user
    );
    if (data.message === "success") {
      window.open("/Login", "_self");
    }
    console.log(data);
  };
  render() {
    return (
      <div className={SignupStyle.mainContainer}>
        <div className={SignupStyle.innerContainer}>
          <form onSubmit={this.sendFormData}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">First name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter first name"
                name="first_name"
                onChange={this.getFormData}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter last name"
                name="last_name"
                onChange={this.getFormData}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                onChange={this.getFormData}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={this.getFormData}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: "#003060" }}
            >
              Signup
            </button>
            <button
              type="button"
              className="btn btn-primary"
              style={{ backgroundColor: "#003060" }}
              onClick={() => {
                window.open("./Login", "_self");
              }}
            >
              already have an email
            </button>
          </form>
        </div>
      </div>
    );
  }
}
