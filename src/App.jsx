import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Footer from "./components/Footer/Footer"
import { BrowserRouter,Routes ,Route } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import Loading from "./components/Loading/Loading";
import { ToastContainer } from "react-toastify"
import './App.css'




function App() {
 
  return (
   <div className="app-container">
    <BrowserRouter>
     <CartProvider>
      <NavBar/>
      <ToastContainer  theme="dark" position="bottom-right" />

      <Routes>
        <Route path="/" element={ <ItemListContainer greeting={"Panama Music"} LoadingComponent={Loading} /> } />
        <Route path="/category/:idCategory" element={ <ItemListContainer LoadingComponent={Loading} />} />
        <Route path="/detail/:idProduct" element={ <ItemDetailContainer   LoadingComponent={Loading} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer/>
     </CartProvider> 
    </BrowserRouter>
   </div>
  )
}

export default App
