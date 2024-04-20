import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ShoppingCart from "./pages/shoppingcart/ShoppingCart";
import FavouriteCart from "./pages/favourite/FavouriteCart";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="favourite" element={<FavouriteCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
