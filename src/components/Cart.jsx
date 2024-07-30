import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { items, total, clear } = useContext(CartContext);

    return (
        <div id="cart">
            <h2>Carrinho:</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - R${item.price}
                    </li>
                ))}
            </ul>
            <h3>Total: R${total}</h3>
            <button onClick={clear}>Esvaziar carrinho</button>
        </div>
    )
}

export default Cart