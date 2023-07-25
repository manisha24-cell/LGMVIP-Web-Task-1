import React ,{useState} from "react";
import { v4 as uuidv4 } from "uuid";
function TodoForm({createTodo}){
    const [input,setInput]=useState('');

    const handleSumbit=(e)=>{
        console.log('Click', e)

        e.preventDefault();
        if(input===''){
            alert('Please Enter the task')
        }
        else
        {
            const newTodo={
                id:uuidv4(),
                name:input,
                is_edit:false,
                is_done:false
            }
            createTodo(newTodo)
            setInput('')
        }
    }
   

    return(
        <form className="Todoform">
       
        <input 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder='enter todo'
        className="todo-input"  
        />
        
        <button type="sumbit" className="todo-btn" onClick={(e)=>handleSumbit(e)}>Add todo</button> 
        </form>

    )
}
export default TodoForm;