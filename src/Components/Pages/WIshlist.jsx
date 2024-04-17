import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../Redux_Store/actions";

const Wishlist = () => {
  const selectWishlist = useSelector((state) => {
    return state.WishlistReducer;
  });
  const dispatch = useDispatch();

  return (
    <div className="wishlist-container">
      {selectWishlist.map((item) => {
        return (
          <div className="wishlist-inner-container" key={item.id}>
            <div className="wish-image-container">
              <img src={item.image} alt="" />
            </div>
            <div className="wish-description-part">
              <li>
                <b>Name: </b>
                {item.title}
              </li>
              <li>
                <b>Price: </b>
                {item.price}$
              </li>
              <li>
                <b>Ratings: </b>
                {item.rating.rate}
              </li>
              <li>
                <b>Purchased by: </b>
                {item.rating.count} people
              </li>
            </div>
            <div className="wish-icon-section">
              <img
                className="unfavorite-btn"
                onClick={() => dispatch(removeFromWishlist(item.id))}
                src="https://cdn-icons-png.flaticon.com/512/7299/7299756.png"
                alt="cdn link img"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Wishlist;
