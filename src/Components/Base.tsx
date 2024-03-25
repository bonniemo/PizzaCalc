
import { useState } from "react";
import uuid from "react-uuid";
import { PropList } from "./CreatePizza"




const Base = ({pizza, setPizza}: PropList) => {  
  const [base, setBase] = useState({size: "", price: ""});

  const handleClick = () => {
    setPizza({...pizza, id: uuid(), size: base.size, price: Number(base.price)});    
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
