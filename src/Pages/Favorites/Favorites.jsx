import React, { useEffect, useState } from 'react';
import PhoneCard from '../../components/PhoneCard/PhoneCard';
import { getFavorite, removeFavoritePhones } from '../../Utility/localStorge';
import EmptyState from '../../components/EmptyState/EmptyState';


const Favorites = () => {
    const [displayPhones, setDisplayPhones] = useState([]);
    useEffect(()=>{
        const favoritePhones = getFavorite()
        setDisplayPhones(favoritePhones)
    },[]);
    const handleDelete = id =>{
        removeFavoritePhones(id);
        setDisplayPhones(getFavorite())
      }

      if(displayPhones.length <1) return <EmptyState></EmptyState>
    return (
        <div className="py-12">
      <div className="gird grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayPhones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} deletable={true} handleDelete={handleDelete}></PhoneCard>
        ))}
      </div>
    </div>
    );
};

export default Favorites;