import { CartProvider } from "./components/CartContext"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"

function App() {

  return (
    <>
     <CartProvider>
      <div>
        <h1>Periféricos para seu pc (e outras coisas)</h1>
        <ProductList />
        <Cart />
      </div>
     </CartProvider>
    </>
  )
}

export default App
