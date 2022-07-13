import "./App.css";
import { Component } from "react";
import UnKnownRoute from "./Components/UnKnownRoute/UnKnownRoute";

/* ================== components ====================*/
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import TvShow from "./Components/TvShow/TvShow";
import People from "./Components/People/People";
import About from "./Components/About/About";
import Networks from "./Components/Networks/Networks";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
/* ================== React Router ===================*/
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

class App extends Component {
  render() {
    let token = localStorage.getItem("token");
    let SlashRoute = "/Login";
    if (token) {
      SlashRoute = "/Home";
    }
    return (
      <div className="App">
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}

          {/* <Route path="/Home" element={<Home />} /> */}
          <Route path="/Home" element={<ProtectedRoutes component={Home} />} />
          <Route
            path="/Movies"
            element={<ProtectedRoutes component={Movies} />}
          />
          <Route
            path="/tvShow"
            element={<ProtectedRoutes component={TvShow} />}
          />
          <Route
            path="/people"
            element={<ProtectedRoutes component={People} />}
          />
          <Route
            path="/About"
            element={<ProtectedRoutes component={About} />}
          />
          <Route
            path="/Networks"
            element={<ProtectedRoutes component={Networks} />}
          />
          <Route path="/Login" element={<Login />} />

          <Route path="/Signup" element={<Signup />} />

          <Route path="/UnKnownRoute" element={<UnKnownRoute />} />
          <Route
            path="*"
            exact={true}
            element={<Navigate to="/UnKnownRoute" replace />}
          />
          <Route
            path="/"
            exact={true}
            element={<Navigate to={SlashRoute} replace />}
          />
        </Routes>
      </div>
    );
  }
}

// function App() {}

export default App;
