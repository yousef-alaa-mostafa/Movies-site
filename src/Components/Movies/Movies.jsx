import axios from "axios";
import React, { Component } from "react";
import NavBar from "../Nabar/Navbar";
import MoviesStyle from "./Movies.module.css";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      Movies: [],
    };
  }
  GetMoies = async () => {
    let data = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=52bbcddeda849047525b51d6f8a12361`
    );
    this.setState({ Movies: data.data.results });
    // console.log(data.data.results);
  };
  componentDidMount() {
    this.GetMoies();
  }
  render() {
    return (
      <>
        <NavBar />
        {/* Movies */}
        <div className="container my-5">
          <div className="row">
            {this.state.Movies.map((value, index) => {
              return (
                <div key={index} className="col-md-2 my-3">
                  <div className="item" id={MoviesStyle.Movies}>
                    {" "}
                    <img
                      className="w-100"
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        value.poster_path
                      }
                    ></img>
                    <div>{value.original_title}</div>
                    <span>{value.vote_average.toFixed(1)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
