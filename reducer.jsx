export const initialState = {
  basket: []
};

export const reducer = (state, action) => {
  if (action.type === "add-to-basket") {

    return {
      ...state,
      basket: [
        ...state.basket,
        action.item,
      ]
    };
  } if (action.type === "remove-from-cart") {

    const newBasket = [...state.basket];

    const itemIndex = state.basket.findIndex((item) => item.id === action.id);
    if (itemIndex >= 0) {
      newBasket.splice(itemIndex, 1);
    }
    return {
      ...state,
      basket: newBasket
    };
  }
  if (action.type === "reduce-quantity") {
    const updatedBasket = state.basket.map((item, index) =>
      index === action.index && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    return {
      ...state,
      basket: updatedBasket,
    };
  }
  if (action.type === "increase-quantity") {

    const updatedBasket = state.basket.map((item, index) =>
      index === action.index && item.quantity >= 0
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    return {
      ...state,
      basket: updatedBasket,
    };
  }
  if (action.type === "set-basket") {

    return {
      ...state,
      basket: [
        ...state.basket,
        action.item,
      ]
    };
  }
};