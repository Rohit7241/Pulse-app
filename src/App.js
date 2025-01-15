import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
      category:"business",
      progress:10
    };
  }
  toggle = () => {
    if (this.state.mode === "light") {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
   setprogress=(progress)=>{
   this.setState({progress:progress})
   }
  render() {
   
    return (
      <Router>
        <div>
         
          <Routes>
            <Route
              path="/"
              element={
                <>
                <NavBar toggle={this.toggle} mode={this.state.mode} category="Home" />
                        <LoadingBar color="#f11946" progress={this.state.progress} height="3px" />
                <News setprogress={this.setprogress} apikey="b2b2a33b6def42d6a63232a6b3f8f279" key="home" mode={this.state.mode} title="HOME" category="general" />
                </>
              }
            />
            <Route
              path="/Business"
              element={
                <>
             
                <NavBar toggle={this.toggle} mode={this.state.mode} category="business"/>
                <LoadingBar color="#f11946" progress={this.state.progress} height="3px" />
                <News setprogress={this.setprogress} apikey="b2b2a33b6def42d6a63232a6b3f8f279" key="business" mode={this.state.mode} category="business"/>
                </>
              }
            />
            <Route
              path="/General"
              element={
                <>
                 <NavBar toggle={this.toggle}  mode={this.state.mode} category="general"/>
                 <LoadingBar color="#f11946" progress={this.state.progress} height="3px" />
                <News setprogress={this.setprogress} apikey="b2b2a33b6def42d6a63232a6b3f8f279" title="General" key="general" mode={this.state.mode} category="general"/>
               
                </>
               
              }
            />
            <Route
              path="/Health"
              element={
                <>
                 <NavBar toggle={this.toggle} mode={this.state.mode} category="health"/>
                 <LoadingBar color="#f11946" progress={this.state.progress} height="3px" />
                <News setprogress={this.setprogress} apikey="b2b2a33b6def42d6a63232a6b3f8f279" key="health" mode={this.state.mode} category="health"/>
               
                </>
              }
            />
            <Route
              path="/Science"
              element={
                <>
                 <NavBar toggle={this.toggle} mode={this.state.mode} category="science"/>
                 <LoadingBar color="#f11946" progress={this.state.progress} height="3px" />
                <News setprogress={this.setprogress} apikey="b2b2a33b6def42d6a63232a6b3f8f279" key="science" mode={this.state.mode} category="science"/>
               
                </>
              }
            />
            <Route
              path="/Sports"
              element={
                <>
                   <NavBar toggle={this.toggle} mode={this.state.mode} category="sports"/>
                   <LoadingBar color="#f11946" progress={this.state.progress} height="3px" />
                <News setprogress={this.setprogress} apikey="b2b2a33b6def42d6a63232a6b3f8f279" key="sports" mode={this.state.mode} category="sports"/>
             
                </>
              }
            />
            <Route
              path="/Technology"
              element={
                <>
                 <NavBar toggle={this.toggle} mode={this.state.mode} category="technology"/>
                 <LoadingBar color="#f11946" progress={this.state.progress} height="3px" />
                <News setprogress={this.setprogress} apikey="b2b2a33b6def42d6a63232a6b3f8f279" key="technology" mode={this.state.mode} category="technology"/>
               
                </>
              }
            />
            <Route
              path="/Entertainment"
              element={
                <>
                 <NavBar toggle={this.toggle} mode={this.state.mode} category="entertainment"/>
                 <LoadingBar color="#f11946" progress={this.state.progress} height="3px" />
                <News setprogress={this.setprogress} apikey="b2b2a33b6def42d6a63232a6b3f8f279" key="entertainment" mode={this.state.mode} category="entertainment"/>
  
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
