import { useState } from "react"
import "./App.css"
function App() {
let [color, setColor]= useState("red")
return(
      <div className="btn" style={{backgroundColor: color}}>
     <button className="red" onClick={()=> setColor("red")}>RED</button>
     <button className="yellow" onClick={()=> setColor("yellow")}>YELLOW</button>
     <button className="green" onClick={()=> setColor("green")}>GREEN</button>
     <button className="blue" onClick={()=> setColor("blue")}>BLUE</button>
     <button className="black" onClick={()=> setColor("black")}>BLACK</button>
     <button className="orange" onClick={()=> setColor("orange")}>ORANGE</button>
      </div>
  )
}
export default App
