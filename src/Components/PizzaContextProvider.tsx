import { createContext, useReducer } from "react";
import uuid from "react-uuid";

type Pizza = {
  // size: "Original" | "BarnPizza" | "FamiljePizza";
  id: string;
  size: string;
  topping: Topping[];
  totalPrice: number;
};

type Topping = {
  name: string;
  price: number;
};

type PizzaState = {
  pizzas: Pizza[];
};

type PropList = {
  children: React.ReactNode;
};

type Action =
  | { type: "ADD"; payload: Pizza }
  | { type: "REMOVE"; payload: string }
  | { type: "EDIT"; payload: string };

const InitialPizza: PizzaState = {
  pizzas: [
    {
      id: uuid(),
      size: "Original",
      topping: [{ name: "skinka", price: 30 }],
      totalPrice: 50,
    },
    {
      id: uuid(),
      size: "BarnPizza",
      topping: [
        { name: "pommes", price: 10 },
        { name: "oliver", price: 10 },
      ],
      totalPrice: 70,
    },
  ],
};

const reducer = (state: PizzaState, action: Action) => {
  switch (action.type) {
    case "ADD":
      console.log(state);
      return {
        pizzas: [...state.pizzas, action.payload],
      };

    case "REMOVE":
      return state;
    case "EDIT":
      return state;
  }
};

export const PizzaContext = createContext<{
  state: PizzaState;
  dispatch: React.Dispatch<Action>;
}>({
  state: InitialPizza,
  dispatch: () => null,
});

const PizzaContextProvider = ({ children }: PropList) => {
  const [state, dispatch] = useReducer(reducer, InitialPizza);

  return (
    <>
      <PizzaContext.Provider value={{ state, dispatch }}>
        {children}
      </PizzaContext.Provider>
    </>
  );
};
export default PizzaContextProvider;
