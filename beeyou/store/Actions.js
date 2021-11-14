export const ACTIONS = {
  NOTIFY: "NOTIFY",
  AUTH: "AUTH",
  ADD_CART: "ADD_CART",
  ADD_MODAL: "ADD_MODAL",
};

export const addToCart = (product, cart) => {
  const check = cart.findIndex((item) => item._id === product._id);

  if (check < 0) {
    return {
      type: "ADD_CART",
      payload: [...cart, { ...product, quantity: 1 }],
    };
  } else {
    cart[check].quantity++;
    return {
      type: "ADD_CART",
      payload: cart,
    };
  }
};

export const decrease = (data, _id) => {
  const newData = [...data];
  newData.map((item) => {
    if (item._id === _id) item.quantity -= 1;
  });

  return { type: "ADD_CART", payload: newData };
};

export const increase = (data, _id) => {
  const newData = [...data];
  newData.map((item) => {
    if (item._id === _id) item.quantity += 1;
  });

  return { type: "ADD_CART", payload: newData };
};

export const deleteFromCart = (data, _id) => {
  if (data) {
    const newData = data.filter((item) => item._id !== _id);
    return { type: "ADD_CART", payload: newData };
  }
};

export const deleteItem = (data, id, type) => {
  if (data) {
    const newData = data.filter((item) => item._id !== id);
    return { type, payload: newData };
  }
};
