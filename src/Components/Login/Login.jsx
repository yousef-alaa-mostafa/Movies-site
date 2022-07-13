import React, { Component } from "react";
import LoginStyle from "./Login.module.css";
import axios from "axios";
import { data } from "jquery";

export default class Signup extends Component {
  constructor() {
    super();
    this.user = {
      email: "",
      password: "",
    };
    this.state = {
      email_issue: "",
      password_issue: "",
    };
  }
  // tempData;

  getFormData = (event) => {
    this.user[event.target.name] = event.target.value;
    // console.log(this.user);
  };
  sendFormData = async (event) => {
    event.preventDefault();
    let { data } = await axios.post(
      "https://route-egypt-api.herokuapp.com/signin",
      this.user
    );
    // this.tempData = data;
    if (data.message === "success") {
      localStorage.setItem("token", data.token);
      event.target.reset();
      window.open("/Home", "_self");
    } else {
      if (data.status === 401) {
        localStorage.setItem("token", "_self");
        if (data.message === "email doesn't exist") {
          this.setState({
            email_issue: "email is not exist",
            password_issue: "",
          });
        } else {
          this.setState({
            password_issue: "incorrect password",
            email_issue: "",
          });
        }
      }
    }
    console.log(data);
  };

  render() {
    return (
      <>
        <div className="container-fluid" id={LoginStyle.container}>
          <div className="row">
            <div
              className="col-sm col-lg-6 col-md-12 col-sm-12 order-lg-1 order-md-2 order-sm-2 order-2"
              id={LoginStyle.image}
            >
              <img
                src="https://storage.googleapis.com/afs-prod/media/e53811360eed4b8ba26b5f635d703a7c/3000.jpeg"
                width="100%"
                // height="750px"
              ></img>
            </div>
            <div
              className="col-sm col-lg-5 col-md-12 col-sm-12 order-lg-2 order-md-1 order-sm-1 order-1"
              id={LoginStyle.form}
            >
              <div className={LoginStyle.innerContainer}>
                <form onSubmit={this.sendFormData}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={this.getFormData}
                      name="email"
                    />
                    <div id="emailHelp" className="form-text text-muted">
                      {this.state.email_issue}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={this.getFormData}
                      name="password"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      {this.state.password_issue}
                    </small>
                  </div>

                  <div className="from-group">
                    <button type="submit" className="btn btn-primary ">
                      Login
                    </button>
                  </div>
                </form>

                <button
                  className="btn btn-primary"
                  id={LoginStyle.Signup}
                  onClick={() => {
                    window.open("/Signup", "_self");
                  }}
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
