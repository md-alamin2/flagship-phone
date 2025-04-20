import React, { useContext, useEffect, useState } from 'react';
import PhoneCard from '../../components/PhoneCard/PhoneCard';
import { getCart, removeCart } from '../../Utility/localStorge';
import EmptyState from '../../components/EmptyState/EmptyState';
import { CartContext } from '../../Providers/Context';

const Carts = () => {
    const {setCart} = useContext(CartContext)
    const [displayPhones, setDisplayPhones] = useState([]);

    useEffect(()=>{
        const cartItems = getCart()
        setDisplayPhones(cartItems);
    },[]);
    const handleDeleteCart =(id)=>{
        removeCart(id)
        setCart(getCart)
        setDisplayPhones(getCart())
    }

    if(displayPhones.length<1) return <EmptyState></EmptyState>
    return (
        <div className="py-12">
      <div className="gird grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayPhones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} deletable={true} handleDelete={handleDeleteCart}></PhoneCard>
        ))}
      </div>
    </div>
    );
};

export default Carts;