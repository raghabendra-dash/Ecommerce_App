const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      item,
    },
  };
};

const removeFromCart = (id) => {
  return { type: "REMOVE_FROM_CART", payload: { id } };
};

const addToWishlist = (item) => {
  return { type: "ADD_TO_WISHLIST", payload: { item } };
};

const removeFromWishlist = (id) => {
  return { type: "REMOVE_FROM_WISHLIST", payload: { id } };
};

const incrementCartItem = (id) => {
  // console.log(id, item);
  return { type: "INCREMENT_ITEM", payload: { id } };
};

const decrementCartItem = (id) => {
  return { type: "DECREMENT_ITEM", payload: { id } };
};

export {
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  incrementCartItem,
  decrementCartItem,
};
