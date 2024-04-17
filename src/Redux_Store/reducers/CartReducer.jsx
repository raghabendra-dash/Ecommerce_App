const initialState = {
  item: [],
  totalPrice: 0,
  totalQyantity: 0,
};

// const cartItem = 0;
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.item.find((item) => {
        return item.id === action.payload.item.id;
      });
      // state.totalPrice = state.totalPrice + action.payload.item.price;
      // console.log(state.totalPrice);
      if (existingItem) {
        return {
          ...state,
          item: state.item.map((item) => {
            if (item.id === existingItem.id) {
              // console.log("inside nested if");

              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          }),
        };
      }
      // console.log("outside if");
      return {
        ...state,
        item: [
          ...state.item,
          {
            ...action.payload.item,
            quantity: 1,
          },
        ],
      };

    case "REMOVE_FROM_CART":
      // console.log(state.totalPrice);
      return {
        ...state,
        item: state.item.filter((item) => {
          // if (item.id === action.payload.id) {
          //   console.log((state.totalPrice = state.totalPrice - item.price));
          // }
          return item.id !== action.payload.id;
        }),
      };

      case "INCREMENT_ITEM":
        const { id } = action.payload;
        return {
          ...state,
          item: state.item.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          }),
        };

    case "DECREMENT_ITEM":
      return {
        ...state,
        item: state.item.map((item) => {
          if (item.id === action.payload.id) {
            if (item.quantity === 0) {
              return item;
            }
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export default CartReducer;
