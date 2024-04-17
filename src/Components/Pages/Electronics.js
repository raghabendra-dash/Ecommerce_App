import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../../Redux_Store/actions";

const Electronics = () => {
  const [electronicData, setElectronicData] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((res) => setElectronicData(res.data))
      .then(() => {
        setIsLoding(true);
      })
      .catch((err) => {
        setIsLoding(false);
      });
  };
  const dispatch = useDispatch();
  const addingItemToCart = (item) => {
    // console.log(id);
    dispatch(addToCart(item));
  };

  return (
    <>
      <h1 className="newArrival-heading">Electronics</h1>
      {isLoding ? (
        <div className="products_container">
          {electronicData.map((item) => {
            return (
              <div className="item-card" key={item.id}>
                <div className="item-image-container">
                  <img src={item.image} alt="" />
                </div>
                <div className="item-description-container">
                  <li>
                    <b>Name:</b> {item.title}
                  </li>
                  <li>
                    <b>Price:</b> <span className="price"> {item.price}</span>$
                  </li>
                  <li>
                    <b>Ratings:</b> <span>{item.rating.rate}</span>
                  </li>
                  <li>
                    <b>Purchase:</b> {item.rating.count}
                  </li>
                </div>
                <div className="bottom-part-of-Cart">
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addingItemToCart(item)}
                  >
                    Add To Cart
                  </button>
                  <img
                    onClick={() => {
                      dispatch(addToWishlist(item));
                    }}
                    src="https://cdn-icons-png.flaticon.com/128/520/520459.png"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1 className="spinner">Loading... </h1>
      )}
    </>
  );
};

export default Electronics;
