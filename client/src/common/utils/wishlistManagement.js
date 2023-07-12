import toast from "react-hot-toast";

export const handleWishlist = (wishlist, setWishlist, product) => {
  if (isWishlisted(wishlist, product.slug)) {
    removeFromWishlist(wishlist, setWishlist, product._id);
  } else {
    addToWishlist(wishlist, setWishlist, product);
  }
};

export const isWishlisted = (wishlist, pSlug) => {
  return wishlist.find((product) => product.slug === pSlug);
};

export const addToWishlist = (wishlist, setWishlist, product) => {
  setWishlist([...wishlist, product]);
  localStorage.setItem("wishlist", JSON.stringify([...wishlist, product]));
  toast.success("Item Added to wishlist");
};

export const removeFromWishlist = (wishlist, setWishlist, pSlug) => {
  const updatedWishlist = wishlist.filter((product) => product.slug !== pSlug);
  setWishlist(updatedWishlist);
  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  toast.error("Item removed from wishlist");
};
