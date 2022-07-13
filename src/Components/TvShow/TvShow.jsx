import axios from "axios";
import React, { Component } from "react";
import NavBar from "../Nabar/Navbar";
import TvStyle from "./TvShow.module.css";

export default class TvShow extends Component {
  constructor() {
    super();
    this.state = {
      Tv: [],
    };
  }
  getTv = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=52bbcddeda849047525b51d6f8a12361`
    );
    console.log(data.results);
    this.setState({
      Tv: data.results,
    });
  };
  componentDidMount() {
    this.getTv();
  }
  render() {
    return (
      <>
        <NavBar />
        {/* TvShow */}
        <div className="container my-5">
          <div className="row">
            {this.state.Tv.map((value, index) => {
              return (
                <div key={index} className="col-md-2 my-3">
                  <div className="item" id={TvStyle.Movies}>
                    {" "}
                    <img
                      className="w-100"
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        value.poster_path
                      }
                    ></img>
                    <div>{value.original_name}</div>
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
