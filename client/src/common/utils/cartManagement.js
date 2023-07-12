import toast from "react-hot-toast";

export const handleCart = (cart, setCart, product) => {
  if (isAddedToCart(cart, product._id)) {
    removeFromCart(cart, setCart, product._id);
  } else {
    addToCart(cart, setCart, product);
  }
};

export const isAddedToCart = (cart, pid) => {
  return cart.find((product) => product._id === pid);
};

export const addToCart = (cart, setCart, product) => {
  setCart([...cart, product]);
  localStorage.setItem("cart", JSON.stringify([...cart, product]));
  toast.success("Item Added to cart");
};

export const removeFromCart = (cart, setCart, pid) => {
  let myCart = [...cart];
  let index = myCart.findIndex((item) => item._id === pid);
  myCart.splice(index, 1);
  setCart(myCart);
  localStorage.setItem("cart", JSON.stringify(myCart));
  toast.error("Item removed from cart");
};
