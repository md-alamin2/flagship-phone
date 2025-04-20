import toast from "react-hot-toast";

export const getFavorite = () => {
  const favorites = localStorage.getItem("favorites");
  if (favorites) return JSON.parse(favorites);
  return [];
};
export const addFavorite = (phone) => {
  const favorites = getFavorite();
  const isExist = favorites.find((p) => p.id === phone.id);
  if (isExist) return toast.error("already exist");
  favorites.push(phone);
  toast.success("added to favorite")
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const removeFavoritePhones = (id) => {
  const favorites = getFavorite();
  const remainingFavoritesPhones = favorites.filter((phone) => phone.id !== id);
  localStorage.setItem("favorites", JSON.stringify(remainingFavoritesPhones));
  toast.success("remove successfully")
};



export const getCart = () => {
  const cart = localStorage.getItem("cart");
  if (cart) return JSON.parse(cart);
  return [];
};
export const addToCart = (phone) => {
  const cart = getCart();
  const isExist = cart.find((p) => p.id === phone.id);
  if (isExist) return toast.error("already exist");
  cart.push(phone);
  toast.success("added to favorite")
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeCart = (id) => {
  const cart = getCart();
  const remainingCart = cart.filter((phone) => phone.id !== id);
  localStorage.setItem("cart", JSON.stringify(remainingCart));
  toast.success("remove successfully")
};

