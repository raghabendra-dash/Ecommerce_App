import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../ImageSlider";
import NewArrival from "./NewArrival";

const Home = () => {
  return (
    <>
      <div className="Carousel-container">
        <ImageSlider />
      </div>
      <div className="Gender-Container">
        <div className="gender-inner-container">
          <img
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="men_img"
          />
          <Link to="/men" className="men-legend">
            MEN
          </Link>
        </div>
        <div className="gender-inner-container">
          <img
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Women_img"
          />

          <Link to="/women" className="women-legend">
            WOMEN
          </Link>
        </div>
        <div className="gender-inner-container">
          <img
            src="https://subcontracteu.com/uploads/pages/535eee07e8fd4c9fabc377cd464c1d74.png "
            alt="access_img"
          />
          <Link to="/electronics" className="access-legend">
            ELECTRONIC
          </Link>
        </div>
      </div>
      <div className="newArrival-container">
        <NewArrival />
      </div>
    </>
  );
};

export default Home;
