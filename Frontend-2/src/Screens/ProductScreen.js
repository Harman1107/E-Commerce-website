import React from 'react';
import { Link, useParams } from "react-router-dom";
import Rating from '../Components/Rating';
import data from '../data';

export default function ProductScreen(props) {
  const { id } = useParams();
const product = data.products.find((x) => x._id === id);
  if (!product) {
    return <div> Product not found</div>;
  }
  return (<div>
  <Link to = "/">Back to Result</Link>
    <div className='row top'>
      <div className='col-2'>
        <img className='large' src={product.image} alt={product.name} />
      </div>
      <div className='col-1'>
        <ul>
          <li>
            <h1>{product.name}</h1>
          </li>
          <li>
          <h2>Description: <br />{product.description}</h2>
          </li>
          <li>
          <div>Price</div>
                <div className='Price'>{product.price}</div>
          </li>
          <li>
            <Rating
              rating = {product.rating}
              numReviews = {product.numReviews}
            ></Rating>
          </li>
        </ul>
      </div>  
      <div className='col-1'>
        <div className='card card-body'>
          <ul>
            <li>
              <div className='row'>
                <div>Price</div>
                <div className='Price'>{product.price}</div>
              </div>
            </li>
            <li>
              <div className='row'>
                <div>Status</div>
                <div className='Status'>{product.countInStock >0 ? (<span className='success'>In Stock</span>):
                (<span className='error'>Unavailable</span>)}</div>
              </div>
            </li>
            <li>
              <button className='primary block'> Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>

    </div>

  </div>);
}
