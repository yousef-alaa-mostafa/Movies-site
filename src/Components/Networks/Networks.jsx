import React, { Component } from "react";
import NavBar from "../Nabar/Navbar";

import jwtDecode from "jwt-decode";

export default class Networks extends Component {
  render() {
    let token = localStorage.getItem("token");
    let decode;
    try {
      decode = jwtDecode(token);
    } catch (error) {}
    return (
      <>
        <NavBar />
        Networks
        <div>
          <div>
            Hi {decode.first_name} {decode.last_name}
          </div>
          <div>Your email is: {decode.email}</div>
        </div>
      </>
    );
  }
}
