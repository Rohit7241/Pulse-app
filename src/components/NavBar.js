import React from "react";
import icon from ".//icon.png";
import {
  Link,
} from "react-router-dom";



const NavBar=(props)=> {
  
    return (
      <div>
        <nav 
          className={`bg-${props.mode} navbar fixed-top navbar-expand-lg bg-body-tertiary`}
          data-bs-theme={props.mode}
        >
          <div className="container-fluid">
            <img src={icon} className="mx-1" alt="logo" />
            <a className="navbar-brand" href="/">
              PULSE
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
                <li className="nav-item" ><Link  className={`${(props.category==="Home"?"active":"")}      nav-link `} to="/">Home</Link></li>
                <li className="nav-item" ><Link  className={`${(props.category==="business"?"active":"")}      nav-link `} to="/Business">Business</Link></li>
                <li className="nav-item" ><Link  className={`${(props.category==="entertainment"?"active":"")} nav-link `} to="/Entertainment">Entertainment</Link></li>
                <li className="nav-item" ><Link  className={`${(props.category==="general"?"active":"")}       nav-link `} to="/General">General</Link></li>
                <li className="nav-item" ><Link  className={`${(props.category==="health"?"active":"")}        nav-link `} to="/Health">Health</Link></li>
                <li className="nav-item" ><Link  className={`${(props.category==="science"?"active":"")}       nav-link `} to="/Science">Science</Link></li>
                <li className="nav-item" ><Link  className={`${(props.category==="sports"?"active":"")}        nav-link `} to="/Sports">Sports</Link></li>
                <li className="nav-item" ><Link  className={`${(props.category==="technology"?"active":"")}    nav-link `} to="/Technology">Technology</Link></li>
               
              </ul>
              <div className="form-check form-switch">
                <input
                  className={`form-check-input`}
                  type="checkbox"
                  role="switch"
                  style={{ borderColor: props.mode === "light" ? "black" : "white" }}
                  onChange={props.toggle}
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark Mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }


export default NavBar;



