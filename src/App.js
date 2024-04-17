import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Electronics from "./Components/Pages/Electronics";
import CartItems from "./Components/Pages/CartItems";
import Home from "./Components/Pages/Home";
import Men from "./Components/Pages/Men";
import Wishlist from "./Components/Pages/WIshlist";
import Women from "./Components/Pages/Women";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cartitems" element={<CartItems />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </div>
  );
}

export default App;
