import { useState } from "react"


const Topping = () => {
  const [topping, setTopping] = useState([]as string[]);
  const boxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(".toppings");
  const checkedBoxes = [] as string[]


  const handleClick = () => {
    boxes.forEach(box => {
      box.checked ? checkedBoxes.push(box.id) : console.log('not checked')
    });   
    setTopping(checkedBoxes)
  }
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

      {topping.map((t) => {
        return <p key={t}>{t}</p>
      })}

     
    </section>
  )
}

export default Topping