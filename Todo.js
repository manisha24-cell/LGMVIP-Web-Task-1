import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Todo = ({ todo,remove,update,done,save}) => {
    const [updateText, setUpdateText] = useState(todo.text);
    

    const handleDelete=(todo) => {
     
      console.log("delete" ,todo);
        //console.log(e.target.id)
        remove(todo)
    }
    const handleDone=(todo) => {
     // console.log(e.target.id)
      done(todo)
    }
  
    const handleUpdate = (todo) => {
      update(todo);
      setUpdateText(todo.text);
      }

      const handleSave = (todo,updateText) => {
        console.log("save",todo);
        save(todo,updateText)
        setUpdateText(todo.name);
      }

   let result;    
  if(todo.is_edit){
    result=
    <div className="Todo-update">
    <input className="update-input" type="input"  onChange={(e)=>setUpdateText(e.target.value)}/>
    <button className="save-btn"type="button" onClick={()=>handleSave(todo,updateText)}>Save</button>
    <button className="cancel-btn" type="button" onClick={()=>handleUpdate(todo)}>Cancel</button>
    </div>
    
  } else if(todo.is_done){
    return <del className="done-todo">{todo.name}</del>
  } else {
      result=
        <div className="Todo">
        <input className="td-input" type="checkbox" id={todo.id} checked={todo.is_done} onChange={()=>handleDone(todo)}/>
        <label className="todo-label" htmlFor={todo.id} >{todo.name}</label>
        <FontAwesomeIcon className="fapen" icon={faPenToSquare} id={todo.id} onClick={()=>handleUpdate(todo)}>Edit</FontAwesomeIcon>
        <FontAwesomeIcon className="trash" icon={faTrash}  id={todo.id} onClick={()=>handleDelete(todo)}>Delete</FontAwesomeIcon>
          </div>
  }
  return result;
};
export default Todo;
      


