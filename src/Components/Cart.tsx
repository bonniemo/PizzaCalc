import { useContext } from "react"
import { PizzaContext } from "./PizzaContextProvider"


const Cart = () => {
    const pizzas = useContext(PizzaContext)
    console.log(pizzas)
  return (
    <div>
        {pizzas.pizzas.map((pizza) => (
            pizza.topping
        ))}
    </div>
  )
}

export default Cart