import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Login from "../Login/Login";
// import Home from "../Home/Home";

class ProtectedRoutes extends Component {
  render() {
    let token = localStorage.getItem("token");

    try {
      let decode = jwtDecode(token);
      console.log(decode);
    } catch (error) {
      localStorage.clear();
    }

    if (token) {
      return <this.props.component />;
    } else {
      return <Navigate to="/Login" replace />;
    }
  }
}
export default ProtectedRoutes;
