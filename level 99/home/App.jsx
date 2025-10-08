import k2img from "./assets/k2.webp"


export default function App() {

  const btnINput = prompt("enter what you want to call a button: ")


  const num1 = Number(prompt('enter num1: '))
  const num2 = Number(prompt('enter num2: '))

  const click = () =>{
    
    const res = num1 - num2
    console.log(res)
  }

  
  return(
    
    <div>
      <h2>welcome to react</h2>
      <img src={k2img} alt="" />

      <button>{btnINput}</button>


      
      <button onClick={click}>click to see minuses of your nums in consele</button>
      



    </div>
    
    

    

  )
}