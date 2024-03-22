import { createContext } from "react";

type Pizza = {
  size: "Original" | "BarnPizza" | "FamiljePizza";
  topping: string[];
};

type PizzaState = {
  pizzas: Pizza[];
};

type PropList = {
  children: React.ReactNode;
};

const InitialPizza: PizzaState = {
  pizzas: [
    {
      size: "Original",
      topping: ["skinka"],
    },
    {
        size: "BarnPizza",
        topping: ["pommes", "oliver"]
    }
  ],
};

export const PizzaContext = createContext({} as PizzaState);

const PizzaContextProvider = ({ children }: PropList) => {
  return (
    <>
      <PizzaContext.Provider value={InitialPizza}>
            {children}
        </PizzaContext.Provider>
    </>
  );
};
export default PizzaContextProvider;
