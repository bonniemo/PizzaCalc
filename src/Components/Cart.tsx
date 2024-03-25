import { useContext } from "react";
import { PizzaContext } from "./PizzaContextProvider";

const Cart = () => {
  const { state } = useContext(PizzaContext);

  return (
    <div>
      {state.pizzas.map((pizza) => {
        return ( <section key={pizza.id}>
          <p>{pizza.size}</p>
          {pizza.topping.map((topping) => {
            return <p key={topping.name}>{topping.name} {topping.price} kr</p>            
          })}
        </section>
        )
      })}
    </div>
  );
};

export default Cart;
