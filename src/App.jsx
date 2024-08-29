import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Counter from './Counter.jsx';






//------------  Counter App in React  ----------------- //

// function App(){
  
//   let [num,setNum] = useState(0)

//   return(
  // <>
  
  // <button onClick={()=>{setNum(num + 1)}}>+</button>{num}<button onClick={()=>{setNum(num - 1)}}>-</button>
  
  
  
  
  // </>
  //   )
  
  
  
  
  // }
  
  
  
  
  
  
  
  
  
  
  
              //------------  Counter App in React  ----------------- //
              
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
                      







                      //------------  Todo App in React  ----------------- //
                      
                      
                      
                      
//                       let App = ()=>{
                        
//                         let [todo,setTodo] = useState([])
//                         let todoVal = useRef()
                        
//                         let addTodo = (event)=>{
//                           event.preventDefault();
                          
//                           console.log(todoVal.current.value);
//                           todo.push(todoVal.current.value);
//                           setTodo([...todo])
// console.log(todo);


// todoVal.current.value = ''
// }


// let deleteTodo = (index)=>{

// // console.log('delete called',index);

// todo.splice(index,1);
// setTodo([...todo]);
// console.log(todo);


// }

// let editTodo = (index)=>{
  
//   // console.log('edit called',index);
//   let updatedVal = prompt('Enter Updated Value')
//   todo.splice(index,1,updatedVal);
// setTodo([...todo])
// console.log(todo);



// }



// return(

// <>
// <h1 className="text-center">Todo App</h1>
// <form>

// <input type="text" placeholder='Enter Todo' className='w-50 text-center'  id='todo-input' ref={todoVal} required /><br/><br/>
// <button className='btn btn-success p-3 w-40 text-center' onClick={addTodo}>Click</button>
// </form>
// <ul>
// {todo.map((item,index)=>{

// return(
//   <>
  
// <li>{item}</li>
// <button onClick={()=>{deleteTodo(index)}}>delete</button><button onClick={()=>{editTodo(index)}}>Edit</button>
  
  
//   </>
// )

// })}

// </ul>



// </>




// )





// }



                      //------------  Todo App in React  ----------------- //


                      
function App(){

  let [todo,setTodo] = useState([]);
  let todoValue = useRef()

  //Add todo ka function h..
  
  let addTodo = (e)=>{
    e.preventDefault()
    let todoInputVal = todoValue.current.value;

    if(todoInputVal === ''){
      alert('Enter todo')
    }else{

      // console.log(todoValue.current.value),
      console.log(todoInputVal);
      
      
      
      todo.push(todoInputVal)
      // console.log(todo);
      setTodo([...todo]);
      
      console.log(todo);
      
      
    }
    todoValue.current.value = ''
    }
    
// Delete todo ka function h 

let deleteTodo=(index)=>{
console.log(index);
todo.splice(index,1)
console.log(todo);
setTodo([...todo])


}

// Edit todo ka function h 

let editTodo=(index)=>{

  console.log(index);
  let updateValue = prompt('Enter the updated Value of todo...') 
  todo.splice(index,1,updateValue)
  console.log(todo);
  setTodo([...todo])
}

return(
<> 
{/* <Counter/> */}
<h1 className='text-center mt-2'>Todo App</h1>
<form>

<input type="text" placeholder='Enter todo' ref={todoValue} className='ml-4'  id='todo-input'  required ="required"/><br />
<button onClick={addTodo} id='addTodo-btn' className='btn btn-primary mt-3 add-btn'>Add todo</button>
</form>



<ul>
  {todo.length >0 ? todo.map((item,index)=>{


return(
<div key={index} >

<li className='mt-2'>{item}
  
  <button  className='btn btn-danger' onClick={()=>{deleteTodo(index)}} id='delete'>Delete</button>   <button id='edit' className='btn btn-success' onClick={()=>{editTodo(index)}}>Edit</button>
    
  </li>


</div>
  
  
  )
  
  }): <h2 className='text-center mt-5 font-bold'>No Items found</h2>}
</ul>



</>
)




}









export default App
