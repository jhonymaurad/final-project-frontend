import React from "react";
import { Carousel, Button } from "antd";
import { Container } from "reactstrap";
import "antd/dist/antd.css";
import "../css/CarouselPet.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
const CarouselPet = () => {
  return (
    <Container>
      <Carousel className="carousel-container" autoplay>
        <div className="slide slide1">
          <h1 className="main-text">Where Pets Find Their People</h1>
          <br /> <br /> <br /> <br />
          <h3 className="sub-text">
            Thousands of adoptable pets are looking for people. People like you.
          </h3>
        </div>
        <div className="slide slide2">
          <h1 className="main-text">Finding the Right Pet</h1> <br /> <br />{" "}
          <br /> <br />
          <h3 className="sub-text">
            Get tips on figuring out who you should adopt.
          </h3>
        </div>
        <div className="slide slide3">
          <h1 className="main-text">From one good home to another</h1> <br />{" "}
          <br /> <br /> <br />
          <h3 className="sub-text">
            Rehoming a dog or a cat keeps them out of shelters.
          </h3>
        </div>
        <div className="slide slide4">
          <h1 className="main-text">Pet adoption with less stress. </h1> <br />{" "}
          <br /> <br /> <br />
          <h3 className="sub-text">
            It’s easy. Search by pet type, gender, location: dig deep into
            traits, breed, history and more.
          </h3>
        </div>
      </Carousel>

      <div className="button-container">
        <Link to="/adoptDogs">
          <Button ghost>Adopt a Pet</Button>
        </Link>
        <Link to="/reHome">
          <Button ghost>Rehome a Pet</Button>
        </Link>
      </div>
    </Container>
  );
};

export default CarouselPet;
