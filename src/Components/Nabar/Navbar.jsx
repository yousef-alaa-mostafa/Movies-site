import ReactDOM from "react-dom";
import { Component } from "react";
/* ================== Css style ====================*/
import NavbarStyle from "./Navbar.module.css";
/* ================== React router ==================*/
import { Link, NavLink } from "react-router-dom";
/* ================== Font awesome ==================*/
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faYoutube } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  DleteToken = () => {
    localStorage.setItem("token", "");
  };
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <Link className="navbar-brand" to="/Home">
            joe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <NavLink className="nav-link" to="/Home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Movies">
                  Moies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tvShow">
                  tvShow
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/people">
                  people
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/NetWorks">
                  NetWorks
                </NavLink>
              </li>
            </ul>
            <div className={NavbarStyle.rightHalf}>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className={NavbarStyle.icons}>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-spotify"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
              <div>
                <Link
                  className="nav-link"
                  id={NavbarStyle.Logout}
                  // onClick={this.DleteToken}
                  to="/Login"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {/* <nav>
          <div className={NavbarStyle.Container}>
            <div>Noxe</div>
            <div>
              <NavLink to={"/Home"}>Home</NavLink>
              <NavLink to={"/Movies"}>Movies</NavLink>
              <NavLink to={"/tvShow"}>tvShow</NavLink>
              <NavLink to={"/people"}>people </NavLink>
              <NavLink to={"/About"}>About</NavLink>
              <NavLink to={"/NetWorks"}>NetWorks</NavLink>
            </div>
            <div>
              <input />
              <div>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-spotify"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
              <div>
                <NavLink to={"/Login"}>Login</NavLink>
              </div>
            </div>
          </div>
        </nav> */}
      </>
    );
  }
}

export default NavBar;
