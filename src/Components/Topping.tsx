import { PropList } from "./CreatePizza";

const Topping = ({ pizza, setPizza }: PropList) => {
  const boxes: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(".toppings");
  let checkedBoxes = [] as string[];

  const handleClick = () => {
    boxes.forEach((box) => {
      box.checked ? checkedBoxes.push(box.id) : console.log("not checked");
      // box.checked = false;
    });
    
    setPizza({ ...pizza, topping: checkedBoxes, isReady: true });
    // checkedBoxes = []
    
  };
  return (
    <section>
      <h1>Toppings 10kr / styck</h1>
      <input className="toppings" type="checkbox" id="pommes" />
      <label htmlFor="pommes">Pommes</label>

      <input className="toppings" type="checkbox" id="lök" />
      <label htmlFor="lök">Lök</label>

      <input className="toppings" type="checkbox" id="Svamp" />
      <label htmlFor="Svamp">Svamp</label>

      <input className="toppings" type="checkbox" id="sås" />
      <label htmlFor="sås">Sås</label>

      <button onClick={handleClick}>Lägg till</button>
    </section>
  );
};

export default Topping;
