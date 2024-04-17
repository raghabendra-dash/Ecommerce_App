import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img
        src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-basket-emblem-15.png"
        alt=""
      />
      <Link to="/" className="link">
        HOME
      </Link>
      <Link to="/men" className="link">
        MEN
      </Link>
      <Link to="/women" className="link">
        WOMEN
      </Link>
      {/* <li>KIDS</li> */}
      {/* <li>HOME&LIVING</li> */}
      <Link to="/electronics" className="link">
        ELECTRONICS
      </Link>
      {/* <li>STUDIO</li> */}
      {/* <form action="">
        <img
          className="search-img"
          src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
          alt=""
        />
        <input
          className="search-input"
          type="text"
          placeholder="Search for Products, brands and more"
        />
      </form> */}
      <div className="right-nav-part">
        {/* <img
          src="https://cdn-icons-png.flaticon.com/512/2354/2354573.png"
          alt=""
        />
        <label className="profile-label" htmlFor="">
          Profie
        </label> */}

        <Link to="/wishlist">
          <img
            src="https://cdn-icons-png.flaticon.com/256/3208/3208709.png"
            alt=""
          />
          <label className="wishlist-label" htmlFor="">
            Wishlist
          </label>
        </Link>
        <Link to="/cartitems">
          <img
            className="bag-img"
            src="https://cdn-icons-png.flaticon.com/512/575/575954.png"
            alt=""
          />
          <label className="bag-label" htmlFor="">
            Bag
          </label>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
