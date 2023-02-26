import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CardBootstrap from "./components/CardBootstrap";
import ImageUpload from "./components/ImageUpload";
// import "bootstrap/dist/css/bootstrap.min.css";

// import UploadImages from "./components/UploadImages";

function BlurredText() {
  return <div className="blur"></div>;
}

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        {/* <p>Bringing More Clearity to Life </p>
        <h1>Deblurring one at time</h1> */}
        <CardBootstrap></CardBootstrap>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Hello </p>
        <h1>Deblurring one at time</h1>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <ImageUpload></ImageUpload>

      {/* //make edit here to show images of doctors  */}
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical Contact Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service>
          <ImageUpload></ImageUpload>
        </Service>
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;
