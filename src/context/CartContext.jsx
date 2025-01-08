import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"))
    const [cart, setCart] = useState( cartLocalStorage ? cartLocalStorage: []);

    useEffect(()=> {
        localStorage.setItem("cart-ecommerce", JSON.stringify(cart))
    }, [cart])

    const addProduct = (newProduct) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(product => product.id === newProduct.id);

            if (existingProductIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += newProduct.quantity;
                return updatedCart;
            } else {
                return [...prevCart, newProduct];
            }
        });
    };
    

    const totalQuantity = () => {
        return cart.reduce((total, productCart) => total + productCart.quantity, 0);
    };

    const totalPrice = () => {
        return cart.reduce((total, productCart) => total + (productCart.quantity * productCart.price), 0);
    };
    
    const deleteProduct = (id) => {
        setCart((prevCart)=> prevCart.filter((product) => product.id!== id));
    }

const deleteCart = () => {
    setCart([])
}

    return (
        <CartContext.Provider value={{ cart, addProduct, deleteProduct,deleteCart, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };