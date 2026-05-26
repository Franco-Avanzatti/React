import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import { RiShoppingCartFill } from "react-icons/ri";

import { Link } from "react-router-dom";

import "./navbar.css";

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext);

    const quantity = totalQuantity();

    return (

        <Link
            to="/cart"
            className="cartwidget"
        >

            <RiShoppingCartFill size={25} />

            {
                quantity > 0 && (

                    <span className="cart-badge">
                        {quantity}
                    </span>

                )
            }

        </Link>
    );
};

export default CartWidget;