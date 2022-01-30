import data from "./data"
import Product from "./Components/Product"


function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/" className="brand">E-Commerce</a>
        </div>
        <div >
          <a href="/cart" className="a">Cart</a>
          <a href="/signin" className="a">Sign In</a>
        </div>
      </header>
      <main>

        {/* Displaying Products */}
        <div className="row center">
          {data.products.map((product) => (
            <Product key={product._id} product={product} />
          ))
          }
        </div>

      </main>
      <footer className="row center">ALL RIGHTS RESERVED 2022</footer>
    </div>
  );
}

export default App;
