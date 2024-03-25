import Cart from "./Components/Cart";
import CreatePizza from "./Components/CreatePizza";
import PizzaContextProvider from "./Components/PizzaContextProvider";
import "./Sass/style.scss";

const App = () => {
  return (
    <>
      <PizzaContextProvider>        
        <CreatePizza/>
        <Cart />
      </PizzaContextProvider>
    </>
  );
};

export default App;
