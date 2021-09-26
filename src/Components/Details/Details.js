import Detail from '../Detail/Detail'
import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';

const Details = () => {

  const [details, setDetails] = useState([]);

  //Selected resort list
  const [carts, setCarts] = useState([]);

  // fetching data
  useEffect(() => {
    fetch('./resort.JSON')
      .then(res => res.json())
      .then(data => setDetails(data))
  }, []);

  //Selecting resort 
  const handleAddToList = detail => {
    //checking duplicate
    const check = carts.find(e => e.key === detail.key);
    if (!check) {
      // Adding new resort to the list
      const newCartAddedList = [...carts, detail];
      setCarts(newCartAddedList);
    }
  }

  return (

    <div className="row mt-5">
      <div className="col-md-9">
        <div className="row">
          {
            // Displaying resort details
            details.map(detail => <Detail key={detail.key} handleAddToList={handleAddToList} detail={detail}></Detail>)
          }
        </div>
      </div>
      <div className="col-md-3">
        {/* displaying selected resort */}
        <Carts carts={carts}></Carts>
      </div>
    </div>
  );
};

export default Details;