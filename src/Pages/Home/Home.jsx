import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
import PhoneDetails from "../PhoneDetails/PhoneDetails";
import PhonesContainer from "../../components/PhonesContainer/PhonesContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  // data
  const data = useLoaderData();
  const [phones, setPhones] = useState(data);

  // search function
  const handleSearch = (e, text) => {
    e.preventDefault();
    if(text.length==0){
      return setPhones(data)
    }
    const searchedPhones = data.filter((phone) =>
      phone.name.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        phone.brand.toLowerCase().split(" ").includes(text.toLowerCase())
    );
    setPhones(searchedPhones);;
  };
  
  return (
    <div>
      {/* hero section */}
      <Hero handleSearch={handleSearch}></Hero>
      {/* phone container section */}
      <PhonesContainer phones={phones}></PhonesContainer>
    </div>
  );
};

export default Home;
