import { useContext, useState } from "react";
import Base from "./Base";
import Topping from "./Topping";
import { Pizza, PizzaContext } from "./PizzaContextProvider";

export type PropList = {
  setPizza: any;
  pizza: Pizza;
};

const CreatePizza = () => {
  const { dispatch } = useContext(PizzaContext)
  const [pizza, setPizza] = useState({
    id: "",
    isReady: false,
    size: "",
    price: 0,
    topping: [],
    totalPrice: 0,
  } as Pizza);

  return (
    <>
      <Base pizza={pizza} setPizza={setPizza} />
      <Topping pizza={pizza} setPizza={setPizza} />

      { pizza.isReady ?  dispatch({type: "ADD", payload: {pizza}}) : console.log('no')
      }      
    </>
  );
};

export default CreatePizza;
