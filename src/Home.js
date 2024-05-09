import React from 'react';
import ItemCard from "./ItemCard";
import data from "./data";

const Home=() =>{

    //console.warn(data.productData);
  return (

    <div>
    
    <h1 className="text-center mt-3">Zeena, Carlos and Val's junkyard</h1>
    <section className ="py-4 container">
        <div className="row justify-content-center">
{data.productData.map((item, index) =>{

    return(
<ItemCard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>

    )
})}

        </div>
    </section>

    </div>
  )
}

export default Home