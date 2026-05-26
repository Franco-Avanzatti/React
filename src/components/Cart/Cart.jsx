import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cart.css"

const Cart = () => {
  const { cart, deleteProduct, deleteCart, totalPrice } = useContext(CartContext)


  if (cart.length === 0) {
     return (

    <div className="min-h-screen flex flex-col items-center justify-center gap-6">

      <h2 className="text-3xl font-bold text-white">
        El carrito esta vacío
      </h2>

      <Link
        to="/"
        className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg"
      >
        Volver al inicio
      </Link>

    </div>

  )
  }

 return (
  <div className="min-h-screen flex justify-center px-4 py-8">
    
    <div className="w-full max-w-2xl flex flex-col items-center gap-6">

      {/* CART LIST */}
      <ul className="w-full flex flex-col gap-4">
        {cart.map((productCart) => (
          <li
            key={productCart.id}
            className="flex flex-col sm:flex-row items-center gap-4 border rounded-lg p-4 bg-white/5"
          >
            <img
              src={productCart.image}
              className="w-20 h-20 object-contain"
            />

            <div className="flex-1 text-center sm:text-left">
              <p className="font-semibold">{productCart.name}</p>
              <p>cantidad: {productCart.quantity || 1}</p>
              <p>
                precio c/u: {productCart.price.toLocaleString("es-ES")}
              </p>
            </div>

            <button
              onClick={() => deleteProduct(productCart.id)}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      {/* TOTAL */}
      <h3 className="text-lg font-bold">
        Precio total: {totalPrice().toLocaleString("es-ES")}
      </h3>

      {/* BOTONES */}
      <Link
        to="/checkout"
        className="w-full text-center bg-black text-white py-3 rounded"
      >
        Continuar con mi compra
      </Link>

      <button
        onClick={deleteCart}
        className="w-full bg-gray-800 text-white py-3 rounded"
      >
        Vaciar carrito
      </button>

    </div>
  </div>
);
}
export default Cart