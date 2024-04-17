const WishlistReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return [...state, action.payload.item]; // Using action.payload.item

    case "REMOVE_FROM_WISHLIST":
      return state.filter((item) => item.id !== action.payload.id); // Using action.payload.id

    default:
      return state;
  }
};

export default WishlistReducer;
