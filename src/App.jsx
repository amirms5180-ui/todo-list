import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import cheak  from './check-circle-.svg'
import circle from './circle-svgrepo-com (1).svg'
import backgarand from "./bg-desktop-dark.jpg"
import zarbdarr from "./times-xxs-svgrepo-com (1).svg"
function App() {
  const [todo,settodo]=useState("")
  const [todoList,settodolist]=useState([])
  const [show,setShow]=useState('all')

  
// const todoList =["learn React","learn Redux"]
// todoList=[]
function addTodo(e){
 settodo( e.target.value) 

}
function handlekeydown(e){
  if(e.key==="Enter"){
    if(todo !==""){
     settodolist([...todoList,{
      text:todo
    ,cheakCircle: false}])
     settodo("") }}
}
function handleplus() {
  

  if (todo !== "") {
    settodolist([
      ...todoList,
      {
        text: todo,
        cheakCircle: false
      }
    ])

    settodo("")
  }
}

function handleCheack(index){
  settodolist(
    todoList.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          cheakCircle: !todo.cheakCircle
        }
      }

      return todo
    })
  )
    
}
 
function handleDelete(index) {
  settodolist(
    todoList.filter((todo, indexlist) => {
      if(index!== indexlist){
        return todo
      }
    })
  )
}
function showing(){
  if(show==="active"){
   return todoList.filter(show =>show.cheakCircle===false)
  }
  if(show==="complete"){

   return todoList.filter(show =>show.cheakCircle===true)
  }
  if(show==="all")
  return todoList
}

const itemLeft = todoList.filter(todo => todo.cheakCircle === false).length





  return (
    <div className='top'>

   
    <div className='all'>

     <h1 className='title'>TODO</h1>
  <div className='list'> 
    <div className='input_plus'>

      
    <input className='input' id='todoInput' value={todo} type="text"placeholder='creat new todo list' onKeyDown={handlekeydown} onChange={addTodo}   />
    <button className='button-add'  onClick={()=>handleplus()}>Add</button>
 
    </div>
    <div className='border'>

    <ul>

      {showing().map((todo,)=>{
        const index=todoList.indexOf(todo);
        return(
        
        <li className='list-item' style={{textDecoration:todo.cheakCircle?"line-through":"none",color:" hsl(236, 33%, 92%)"}}> 
        <div className='list-div'><img src={todo.cheakCircle ? cheak : circle}  onClick={()=>handleCheack(index)} width="30" height="30"/>
         <span>{todo.text}</span> 
         
         </div>
         <img src={zarbdarr} alt="" width="25" height="25" className='img_zarbdar'onClick={()=>handleDelete(index)} />
         </li>
        )
        
       })}
      
    </ul>
    <div className='bottom'>
      <p>{itemLeft}items left</p>
      <div className='bottom_item'>
        <buttom className="bottom_item_self" onClick={()=>setShow("all")}>All</buttom>
        <buttom className="bottom_item_self" onClick={()=>setShow("active")}>Active</buttom>
        <buttom className="bottom_item_self" onClick={()=>setShow("complete")}>Complete</buttom>
      </div>
      <div onClick={()=>settodolist(todoList.filter(list=>{
        if(list.cheakCircle===false){
          return list

        }
      }))} style={{cursor:"pointer"}}>
      <p classNameName="bottom_item_self">clear Completed</p>
      </div>
      </div>
      


    </div>
      <div className='bottom_item2'>
        <buttom className="bottom_item_self2" onClick={()=>setShow("all")}>All</buttom>
        <buttom className="bottom_item_self2" onClick={()=>setShow("active")}>Activ</buttom>
        <buttom className="bottom_item_self2" onClick={()=>setShow("complete")}>Complete</buttom>
      </div>
      </div >
      </div>
       </div>
  );
}


  
  


export default App
