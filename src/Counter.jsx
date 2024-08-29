import { useState } from "react";


function Counter(){
    let [num,setNum] = useState(0);

function add(){


    setNum(num + 1) 


}
function less(){
if(num < 1){

    return
}
else{
    
    setNum(num - 1)
}}


    return(

<>  
<h1 className="text-center">Hello Counter {num} </h1>
<button onClick={add} className="btn btn-primary text-center flex justify-content-center">Add</button>
<button onClick={less} className="btn btn-primary text-center flex justify-content-center">Less</button>



</>

    )
    





}
export default Counter
