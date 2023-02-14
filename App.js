import { useState } from 'react';
import './App.css';

function App() {
     const [todoList,setTodoList]=useState([])
     const [newTask,setNewTask]=useState("")
       const handleChange=(event)=>{
            setNewTask(event.target.value)
       }
       const addItem=()=>{
            const task={
                  id:todoList.length===0?1:todoList[todoList.length -1].id +1,
                  taskName:newTask,
                  completed:false,
            }
            setTodoList([...todoList,task]);
       }
       const deleteF=(id)=>{

              setTodoList(todoList.filter((task)=> task.id!==id))
       }
       const complete=(id)=>{
                    setTodoList(
                        todoList.map((task)=>{
                              if(task.id===id){

                                    return {...task,completed:true}}
                                    else {return task;}
                              
                        })
                    )  
       }


            return(
                  <div className='App'>
                        <div className='addTask'style={{background:'blue'}}>
                     <input onChange={handleChange} />
                     <button onClick={addItem}>add item</button>
                     </div>
                     <div className='list'>
                         {
                              todoList.map((task)=>{
                                    return( <div className='task' style={{backgroundColor:task.completed?'green':'white'}}>
                                    <h1>{task.taskName}</h1>
                                    <button onClick={()=>{deleteF(task.id)}}>X</button>
                                    <button onClick={()=>{complete(task.id)}}>Complete</button>
                                    </div>
                                          
                                    )

                              })
                         }
                     </div>
                  </div>
            
            )
}
  





export default App;
