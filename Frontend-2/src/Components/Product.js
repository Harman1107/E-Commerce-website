import data from "../data"
import Rating from "./Rating"


function Product(props)
{
  const {product} = props;
    return <div>
      <div key={product._id} className="card">
        <a href={`/product/${product._id}`} className="a">
          <img className="medium" src={product.image} alt="product" />
        </a>
        <div className="card-body"> 
          <a href="product.html" >
            <h2>{product.name}</h2>
          </a>
        </div>
        <Rating rating = {product.rating} numReviews = {product.numReviews}/>
        <div className="price">
          {product.price}
        </div>
      </div>
      </div>
    
}

export default Product;