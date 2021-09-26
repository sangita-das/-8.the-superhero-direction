import React from 'react';
import Rating from 'react-rating';

const Detail = (props) => {
  console.log(props.detail);
  // Destructuring detail object
  const { name, img, address, BDT, mobile, star, Email } = props.detail || {}

  return (

    <div className="col-md-4 ">
      <div className="card shadow rounded mb-4 " >
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title fw-bolder">{name}</h5>
          <table className="mt-4 fw-bold">
            <thead></thead>
            <tbody>
              <tr>
                <td>Location</td>
                <td className="px-2">:</td>
                <td className="text-success">{address}</td>
              </tr>
              <tr>
                <td>Cost</td>
                <td className="px-2">:</td>
                <td className="text-success">{BDT}</td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td className="px-2">:</td>
                <td className="text-success">{mobile}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td className="px-2">:</td>
                <td className="text-success">{Email}</td>
              </tr>

              <Rating
                initialRating={star}
                emptySymbol="far fa-star  "
                fullSymbol="fas fa-star "></Rating>

            </tbody>
            <tfoot></tfoot>
          </table>
          <button className="btn btn-primary mt-4" onClick={() => props.handleAddToList(props.detail)}><i className="fas fa-user-plus"></i> Add to List</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;