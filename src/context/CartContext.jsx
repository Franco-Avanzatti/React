import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const cartLocalStorage = JSON.parse(
        localStorage.getItem("cart-ecommerce")
    );

    const [cart, setCart] = useState(
        cartLocalStorage ? cartLocalStorage : []
    );

    useEffect(() => {

        localStorage.setItem(
            "cart-ecommerce",
            JSON.stringify(cart)
        );

    }, [cart]);

    // AGREGAR PRODUCTO
    const addProduct = (newProduct) => {

        setCart((prevCart) => {

            const existingProduct = prevCart.find(
                (product) => product.id === newProduct.id
            );

            // SI YA EXISTE
            if (existingProduct) {

                return prevCart.map((product) =>
                    product.id === newProduct.id
                        ? {
                            ...product,
                            quantity:
                                product.quantity + newProduct.quantity
                        }
                        : product
                );
            }

            // SI NO EXISTE
            return [
                ...prevCart,
                {
                    ...newProduct,
                    quantity: newProduct.quantity 
                }
            ];
        });
    };

    // CANTIDAD TOTAL
    const totalQuantity = () => {

        return cart.reduce(
            (total, productCart) =>
                total + (productCart.quantity || 1),
            0
        );
    };

    // PRECIO TOTAL
    const totalPrice = () => {

        return cart.reduce(
            (total, productCart) =>
                total + (
                    productCart.quantity *
                    productCart.price
                ),
            0
        );
    };

    // ELIMINAR PRODUCTO
    const deleteProduct = (id) => {

        setCart((prevCart) =>
            prevCart.filter(
                (product) => product.id !== id
            )
        );
    };

    // VACIAR CARRITO
    const deleteCart = () => {
        setCart([]);
    };

    return (

        <CartContext.Provider
            value={{
                cart,
                addProduct,
                deleteProduct,
                deleteCart,
                totalQuantity,
                totalPrice
            }}
        >

            {children}

        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };