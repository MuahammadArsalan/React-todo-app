import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';


//Counter code

// let App = ()=>{

// let [num,setNum] = useState(0);

// let addCounter= ()=>{
  
  
//   setNum(num + 1);
  
// }
// let lessCounter= ()=>{

  
// setNum(num - 1);

// }

//   return(
//     <>
// <p>{num}</p>
// <button onClick={addCounter}>click to add</button>
// <button onClick={lessCounter}>Click to less</button>
    
//     </>
//   )
// }

let App = ()=>{

let [todo,setTodo] = useState([])
let todoVal = useRef()

let addTodo = (event)=>{
event.preventDefault();

console.log(todoVal.current.value);
todo.push(todoVal.current.value);
setTodo([...todo])
console.log(todo);


todoVal.current.value = ''
}


let deleteTodo = (index)=>{

// console.log('delete called',index);

todo.splice(index,1);
setTodo([...todo]);
console.log(todo);


}

let editTodo = (index)=>{
  
  // console.log('edit called',index);
  let updatedVal = prompt('Enter Updated Value')
  todo.splice(index,1,updatedVal);
setTodo([...todo])
console.log(todo);



}



return(

<>
<h1 className="text-center">Todo App</h1>
<form>

<input type="text" placeholder='Enter Todo' className='w-50 text-center' ref={todoVal} required /><br/><br/>
<button className='btn btn-success p-3 w-40 text-center' onClick={addTodo}>Click</button>
</form>
<ul>
{todo.map((item,index)=>{

return(
  <>
  
<li>{item}</li>
<button onClick={()=>{deleteTodo(index)}}>delete</button><button onClick={()=>{editTodo(index)}}>Edit</button>
  
  
  </>
)

})}

</ul>



</>




)





}













export default App
