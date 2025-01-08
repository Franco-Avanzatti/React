import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart,deleteProduct,deleteCart, totalPrice } = useContext(CartContext)


  if(cart.lenght === 0){
    return (
      <div>
        <h2>El carrito esta vacío</h2>
        <Link to="/">Volver al inicio</Link>

      </div>
    )
  }

  return (
    <div>
      <ul>
        {
          cart.map((productCart) => (
            <div className="item-cart" key={productCart.id}>
            <img src={productCart.image} width={100} />
            <p>{productCart.name}</p>
            <p>cantidad: {productCart.quantity}</p>
            <p>precio c/u: {productCart.price.toLocaleString("es-ES")}</p>
            <button onClick={() => deleteProduct(productCart.id)}>Eliminar</button>
          </div>
        ))
        }
      </ul>

      <h3>Precio total: {totalPrice().toLocaleString("es-ES")}</h3>
      <button onClick={deleteCart}>Vaciar carrito</button>
    </div>
  )
}
export default Cart