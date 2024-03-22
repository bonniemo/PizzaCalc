import Base from "./Components/Base";
import Cart from "./Components/Cart";
import PizzaContextProvider from "./Components/PizzaContextProvider";
import Topping from "./Components/Topping";
import "./Sass/style.scss";

const App = () => {
  return (
    <>
      <PizzaContextProvider>
        <Base />
        <Topping />
        <Cart />
      </PizzaContextProvider>
    </>
  );
};

export default App;
