/*import React from 'react';
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

export default Home*/

import React, { useState } from 'react';
import ItemCard from "./ItemCard";
import data from "./data";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h1 className="text-center mt-3">Zeena, Carlos and Val's junkyard</h1>
      {/* Search bar */}
      <div className="container mt-3">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="form-control mb-3"
        />
      </div>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productData
            .filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((item, index) => (
              <ItemCard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
            ))}
        </div>
      </section>
    </div>
  )
}

export default Home;
