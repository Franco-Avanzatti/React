import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  let quantity = totalQuantity()


  return (
    <Link to="/cart" className= "cartwidget">
        <RiShoppingCartFill size={25} />
        <p className="number-cartwidget"> { quantity !== 0 && quantity } </p>
    </Link>
  )
}

export default CartWidget