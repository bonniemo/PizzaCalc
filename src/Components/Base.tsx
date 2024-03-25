import { useContext, useState } from "react";
import { PizzaContext } from "./PizzaContextProvider";
import uuid from "react-uuid";


const Base = () => {
  const { dispatch } = useContext(PizzaContext)
  const [base, setBase] = useState({size: "", price: ""});

  const handleClick = () => {
    dispatch ({
      type: "ADD",
      payload: { id: uuid(), size: base.size, totalPrice: Number(base.price), topping: [] }
    })
  }
  
  return (
    
    <section>
      <h1>Din bas</h1>
      <p>Botten + Tomatsås + Ost</p>
      <h2>Storlek:</h2>

      <input onChange={(e) => {setBase({size: e.target.id, price: e.target.value})}}  type="radio" name="size" id="Original" value={50} />
      <label htmlFor="Original">Pizza Original 50kr</label>

      <input onChange={(e) => {setBase({size: e.target.id, price: e.target.value})}} type="radio" name="size" id="BarnPizza" value={25} />
      <label htmlFor="BarnPizza">Barn-Pizza 25kr</label>

      <input onChange={(e) => {setBase({size: e.target.id, price: e.target.value})}} type="radio" name="size" id="FamiljePizza" value={75} />
      <label htmlFor="FamiljePizza">Familje-Pizza 75kr</label>

      <button onClick={handleClick}>Add</button>
      
    </section>
    
  )
}

export default Base
