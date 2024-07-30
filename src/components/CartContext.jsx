import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [items, setItems] = useState([]);

    const addToCart = (product) => {
        setItems((prevItems) => [...prevItems, product]);
    }

    const clear = () => {
        setItems([]);
    }

    const total = useMemo(() => {
        return items.reduce((total, item) => total + item.price, 0);
    }, [items]);

    return (
        <CartContext.Provider value={{items, addToCart, clear, total}}>
            {props.children}
        </CartContext.Provider>
    )
}