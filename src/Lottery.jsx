import React, { useState } from 'react'

function Lottery() {
    let b=0;
    const [numbers,setNumbers] = useState([0,0,0])
    function GetTicket() {
        let a= [Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)]
        
   setNumbers(a)
   a.forEach(element => {
    b  += element;
    console.log(b);
    
})
   if (15 == b) {
    alert("Congratulation!!")
   }
   console.log("in function");
    }
    

    
    
  return (
    <div>
        
        <h1>Lottery Game !</h1>
        <div>
            {numbers[0]}{numbers[1]}{numbers[2]} <br />
            <button onClick={GetTicket}>GetTicket</button>
        </div>


    </div>
         
  )
}

export default Lottery