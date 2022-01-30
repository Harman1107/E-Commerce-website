import { BrowserRouter, Route ,Routes} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";


function App() {
  return (
      <BrowserRouter>
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
      <main><Routes>
        <Route path = "/product/:id" element={<ProductScreen/>}></Route>
        <Route path = "/" element = {<HomeScreen />} exact></Route>
        </Routes>
      </main>
      <footer className="row center">ALL RIGHTS RESERVED 2022</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
