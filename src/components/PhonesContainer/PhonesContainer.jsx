import React, { useEffect, useState } from "react";
import PhoneCard from "../PhoneCard/PhoneCard";
import MainButton from "../Buttons/MainButton";

const PhonesContainer = ({ phones }) => {
  const [displayPhones, setDisplayPhones] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    showAll ? setDisplayPhones(phones) : setDisplayPhones(phones.slice(0, 6));
  }, [phones, showAll]);
  return (
    <div className="py-12">
      <div className="gird grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayPhones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
      <MainButton
        onClick={() => {
          setShowAll((prv) => !prv);
          showAll && window.scrollTo(0, 100);
        }}
        label={showAll ? "Show Less" : "Show All"}
      ></MainButton>
    </div>
  );
};

export default PhonesContainer;
