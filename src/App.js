import "./App.css";
import Header from "./components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import Pagenotfound from "./components/Pagenotfound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<Pagenotfound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
