import React, { useEffect, useState } from 'react';
import axios from "axios";
import LoadingBox from "../Components/LoadngBox"
import MessageBox from "../Components/MessageBox"
import Product from "../Components/Product"

export default function HomeScreen() {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/products');
        setLoading(false);
        setproducts(data);
      }
      catch (err) {
        setError(err.message);
        setLoading(false);
      }

    };
    fetchData();
  }, [])
  return (<div>
    {loading ? <LoadingBox></LoadingBox> : error ? <MessageBox variant = "danger">{error}</MessageBox> : <div className="row center">
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))
      }
    </div>}



  </div>
  );

}
