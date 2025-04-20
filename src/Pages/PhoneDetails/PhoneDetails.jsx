import React from "react";
import { useLoaderData, useParams } from "react-router";
import { MdShoppingCart, MdBookmarkAdd } from "react-icons/md";
import MainButton from "../../components/Buttons/MainButton";
import { addFavorite, addToCart } from "../../Utility/localStorge";

const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  const {
    brand,
    name,
    model,
    image,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone || {};
  // add favorite item function
  const handleAddFavorite = () => {
    addFavorite(singlePhone);
  };

  // added to cart function
  const handleAddToCart = () => {
    addToCart(singlePhone);
  };
  return (
    <div className="mt-20">
      <img src={image} alt="phone" className="w-full md:w-lg mx-auto" />
      <div className="flex justify-between items-center">
        <h1 className="font-thin text-6xl">{name}</h1>
        <div className="flex items-center gap-3">
          <MainButton
            onClick={handleAddToCart}
            label={<MdShoppingCart></MdShoppingCart>}
          ></MainButton>

          <MainButton
            onClick={handleAddFavorite}
            label={<MdBookmarkAdd></MdBookmarkAdd>}
          ></MainButton>
        </div>
      </div>
      <div className="space-y-4 mt-5 w-full">
        <h2 className="font-thin text-4xl">Details: </h2>
        <div className="divider"></div>
        <p>
          <span className="font-bold">Brand:</span> {brand}
        </p>
        <p>
          <span className="font-bold">Model:</span> {model}
        </p>
        {/* Storage Info */}
        <div className="flex gap-1">
          <p className="font-bold">Storage:</p>
          <div>
            {storage.map((item) => {
              return (
                <div key={item}>
                  <div>{item}</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Price info */}
        <div className="flex gap-1">
          <p className="font-bold">Price:</p>
          <div>
            {Object.entries(price).map(([storage, price]) => (
              <p key={storage} className="">
                <span>{storage}:</span> <span>{price}</span>
              </p>
            ))}
          </div>
        </div>
        <p>
          <span className="font-bold">Camera Info:</span> {camera_info}
        </p>
        <p>
          <span className="font-bold">Description:</span> {description}
        </p>
      </div>
    </div>
  );
};

export default PhoneDetails;
