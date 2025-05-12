import { useState } from "react"
import "./itemCount.css"

const ItemCount = ({ stock, addProductInCart }) => {
  const [count, setCount] = useState(1)

  const handleClickRemove = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleClickAdd = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  return (
    <>
      <div className="container">
        <div className="button-detail">
          <button className="item-count" onClick={handleClickRemove} >-</button>
          <p>{count}</p>
          <button className="item-count" onClick={handleClickAdd} >+</button>
        </div>

        <div className="add-product">
          <button className="item-count" onClick={() => addProductInCart(count)} >Agregar Producto</button>
        </div>

      </div>

    </>


  )
}
export default ItemCount