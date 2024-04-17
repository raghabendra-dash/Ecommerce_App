import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCartItem,
  incrementCartItem,
  removeFromCart,
} from "../../Redux_Store/actions";

const CartItems = () => {
  const selectCartItems = useSelector((state) => {
    return state.CartReducer.item;
  });
  const dispatch = useDispatch();

  const totalPrice = selectCartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="CartItem_Container">
      <div className="total-price">
        <h2>Total Amount: {totalPrice}$</h2>
      </div>
      {selectCartItems.map((item) => {
        return (
          <div className="CartItem_Card" key={item.id}>
            <div className="img_Container">
              <img src={item.image} alt="" />
            </div>
            <div className="cartItem_description">
              <li>
                <b>Name:</b> {item.title}
              </li>

              <li>
                <b>Description: </b>
                {item.description}
              </li>
              <li>
                <b>Ratings:</b> <span>{item.rating.rate}</span>
              </li>
              <li className="cart-item-price">
                <b>Price:</b>{" "}
                <span className="price"> {item.price * item.quantity}</span>$
              </li>
              <div className="removeFromCart">
                <img
                  onClick={() => dispatch(removeFromCart(item.id))}
                  src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                  alt=""
                />
              </div>

              <div className="incredecreContainer">
                <img
                  onClick={() => dispatch(decrementCartItem(item.id))}
                  className="decrementItem"
                  src="https://cdn-icons-png.flaticon.com/512/7080/7080604.png"
                  alt="decrement"
                />
                <span className="incredescreCnt">{item.quantity}</span>
                <img
                  onClick={() => dispatch(incrementCartItem(item.id))}
                  className="incrementItem"
                  src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
