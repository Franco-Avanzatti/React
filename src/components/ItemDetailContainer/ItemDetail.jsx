import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";
import "./detail.css";

const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true)

  const { addProduct } = useContext(CartContext)

  const addProductInCart = (count) => {
    const productCart = { ...product, quantity: count }

    addProduct(productCart)

    setShowItemCount(false)
  }

  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="main-image">
          <img src={product.image} alt={product.name} />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="price-detail">${Number(product.price || 0).toLocaleString("es-ES")}</p>
        <p className="text-detail">{product.description}</p>

        <div className="counter-section">
          {
            showItemCount ? (
              <>
                <ItemCount stock={product.stock} addProductInCart={addProductInCart} />
                <p className="stock-label">Stock disponible: {product.stock}</p>
              </>
            ) : (
              <Link className="buy" to="/cart">Terminar mi compra</Link>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail