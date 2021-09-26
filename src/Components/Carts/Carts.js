import React from 'react';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cartIcon, faList } from '@fortawesome/free-solid-svg-icons'


const Carts = (props) => {
  // Destructuring select places from props
  const { carts } = props || {};

  const cartIcon = <FontAwesomeIcon icon={faList} />


  // Calculating total cost
  const total = carts.reduce((previous, detail) => previous + detail.BDT, 0);



  return (
    <div className="shadow rounded p-4 sticky-top bg-light">
      <h5 className="fw-bold">{cartIcon} Booking Resort : <span className="text-success">{carts.length}</span></h5>
      {
        // displaying all selected place
        carts.map(detail => <Cart key={detail.key} detail={detail}></Cart>)

      }

      <h5 className="fw-bold mt-3">Total Cost : <span className="text-success"> {total}TK</span></h5>

    </div>
  );
};

export default Carts;