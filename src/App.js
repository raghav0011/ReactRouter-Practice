import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProduct from "./components/NewProduct";
import User from "./components/User";
import UserDetails from "./components/UserDetails";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="products" element={<Products />}>
            {/* To display the child route at the parent level we use index to the route */}
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProduct />} />
          </Route>
          <Route path="user" element={<User />} />
          <Route path="user/:userId" element={<UserDetails />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
