import { Component } from "react";
import NavBar from "../Nabar/Navbar";
import HomeStyle from "./Home.module.css";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      Movies_: [],
      Tv_: [],
    };
  }
  getTrending = () => {
    axios.get("");
    axios.post("");
    axios.patch("");
    axios.put("");
    axios.delete("");
  };

  getMovies = async () => {
    let data = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=52bbcddeda849047525b51d6f8a12361`
    );
    // this.state.Movies_.push(data.data.results);
    this.setState({
      Movies_: data.data.results,
    });
    // console.log(data.data.results);
  };
  getTv = async () => {
    let data = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361`
    );
    this.setState({
      Tv_: data.data.results,
    });

    // console.log(data.data.results);
  };
  Movies = [
    {
      id: 1,
      name: "Tom And Jerry",
      description: "Tom And Jerry",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/TomandJerryTitleCardc.jpg/220px-TomandJerryTitleCardc.jpg",
    },
    {
      id: 2,
      name: "The powerpuff girls",
      description: "Tom And Jerry",
      imgUrl:
        "https://www.brooonzyah.net/wp-content/uploads/2022/01/%D8%A7%D8%B3%D9%85%D8%A7%D8%A1-%D9%81%D8%AA%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D9%88%D8%A9-%D9%88%D9%85%D8%B9%D8%A7%D9%86%D9%8A%D9%87%D8%A7-650x400.jpg",
    },
    {
      id: 3,
      name: "Soul",
      description: "Tom And Jerry",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0FxWRJn1v8B4nTSUkjyJiNp_pWK2Ag-Hrbeq9l-tHNodVmmW3i_aymzc7GCdf4SZ2hWg&usqp=CAU",
    },
  ];
  componentDidMount() {
    this.getMovies();
    this.getTv();
  }
  render() {
    return (
      <>
        <NavBar />
        <div>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-4">
                <div className={HomeStyle.leftTrending}>
                  <hr className={HomeStyle.hr1} />
                  <h2>
                    Trending
                    <br />
                    movies
                    <br />
                    to watch now
                  </h2>
                  <p>Most watch movies by days</p>
                  <hr className={HomeStyle.hr2} />
                </div>
              </div>

              {this.state.Movies_.slice(0, 10).map((value, index) => {
                return (
                  <div key={index} className="col-md-2 my-3">
                    <div className="item" id={HomeStyle.movies}>
                      <img
                        className="w-100"
                        // width="100%"
                        // height="170"
                        src={
                          "https://image.tmdb.org/t/p/original" +
                          value.poster_path
                        }
                      ></img>
                      <div className={HomeStyle.movieName}>
                        {value.original_title}
                      </div>
                      <span>{value.vote_average.toFixed(1)}</span>
                      {/* <p>{value.description}</p> */}
                    </div>
                  </div>
                );
              })}
              <br />
              <div className="container my-5">
                <div className="row">
                  <div className="col-md-4">
                    <div className={HomeStyle.leftTrending}>
                      <hr className={HomeStyle.hr1} />
                      <h2>
                        Trending
                        <br />
                        Tv
                        <br />
                        to watch now
                      </h2>
                      <p>Most watch movies by days</p>
                      <hr className={HomeStyle.hr2} />
                    </div>
                  </div>
                  {this.state.Tv_.slice(0, 10).map((value, index) => {
                    return (
                      <div key={index} className="col-md-2 my-3">
                        <div className="item" id={HomeStyle.movies}>
                          <img
                            className="w-100"
                            src={
                              "https://image.tmdb.org/t/p/original" +
                              value.poster_path
                            }
                          ></img>
                          <div className={HomeStyle.movieName}>
                            {value.original_title}
                          </div>
                          <span>{value.vote_average.toFixed(1)}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
