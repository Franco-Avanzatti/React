import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Loading from "./components/Loading/Loading";

import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import { ToastContainer } from "react-toastify";

import './App.css';

function App() {

  return (

    <div className="app-container">

      <BrowserRouter>

        <CartProvider>

          <NavBar />

          <ToastContainer
            theme="dark"
            position="bottom-right"
          />

          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* CATEGORY */}
            <Route
              path="/category/:idCategory"
              element={
                <ItemListContainer
                  LoadingComponent={Loading}
                />
              }
            />

            {/* DETAIL */}
            <Route
              path="/detail/:idProduct"
              element={
                <ItemDetailContainer
                  LoadingComponent={Loading}
                />
              }
            />

            {/* CART */}
            <Route
              path="/cart"
              element={<Cart />}
            />

            {/* CHECKOUT */}
            <Route
              path="/checkout"
              element={<Checkout />}
            />

          </Routes>

          <Footer />

        </CartProvider>

      </BrowserRouter>

    </div>
  );
}

export default App;