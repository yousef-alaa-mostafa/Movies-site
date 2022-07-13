import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import NavBar from "../Nabar/Navbar";

export default class About extends Component {
  constructor() {
    // here we initalize any vars and it is the first component to be rendered
    super();
    console.log("from constructor");
    this.state = {
      name: "About",
    };
  }
  componentDidMount() {
    // used for api as it is rendered after call of render() function
    console.log("from componentDidMount");
  }
  componentDidUpdate() {
    // called after updating states
    console.log("from componentDidUpdated");
  }
  componentWillUnmount() {
    console.log("from componentWillUnmount");
  }

  //function
  ChangeName = () => {
    this.setState({
      name: "joe",
    });
  };
  render() {
    console.log("from render");
    return (
      <>
        <NavBar />
        {this.state.name}
        <br></br>
        <button onClick={this.ChangeName}>change Name</button>
      </>
    );
  }
}
