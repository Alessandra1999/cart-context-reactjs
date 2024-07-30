import { useContext } from "react";
import { CartContext } from "./CartContext";

const products = [
    {id: 1, name: 'Mousepad', price: 18},
    {id: 2, name: 'Mouse',    price: 60},
    {id: 3, name: 'Teclado',  price: 119},
    {id: 4, name: 'Monitor',  price: 575},
    {id: 5, name: 'Headset',  price: 89},
    {id: 6, name: 'Cadeira',  price: 509}
];

const ProductList = () => {
    const { addToCart } = useContext(CartContext);

    return (
        <div id="product">
            <h2>Produtos:</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - R${product.price}
                        <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList