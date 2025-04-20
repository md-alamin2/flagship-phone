import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
import PhoneDetails from "../PhoneDetails/PhoneDetails";
import PhonesContainer from "../../components/PhonesContainer/PhonesContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  // data
  const data = useLoaderData();
  const [phones, setPhones] = useState(data);

  const handleSearch = (e, text) => {
    e.preventDefault();
    if(text.length==0){
      return setPhones(data)
    }
    console.log(text);
    const searchedPhones = data.filter((phone) =>
      phone.name.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        phone.brand.toLowerCase().split(" ").includes(text.toLowerCase())
    );
    setPhones(searchedPhones);;
  };
  return (
    <div>
      <Hero handleSearch={handleSearch}></Hero>
      <PhonesContainer phones={phones}></PhonesContainer>
    </div>
  );
};

export default Home;
