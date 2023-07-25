import React,{useState} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList=()=>{

    const [todoList,setTodoList]=useState([]);
   

    const update=(todo)=>{
      console.log("inside update" ,todo)
        let UpdateTodoList=todoList.map((item)=>{
        if(item.id===todo.id){
            let updateItem={...item,is_edit:!item.is_edit};
            return updateItem;
        }
        return item;
    });
    setTodoList(UpdateTodoList);
    
   }
   const save = (todo, updateText) => {
    console.log("inside save" ,todo);
    let UpdateTodosList = todoList.map((item) => {
      if (item.id === todo.id) {
        let updateItem = {
          ...item,
          name: updateText,
          is_edit: !item.is_edit
        };
        return updateItem;
      }
      return item;
    });
  setTodoList(UpdateTodosList);
  };

    const done = (todo) => {
        const updatedTodos = todoList.map((item) => {
          console.log(item);
          if (item.id === todo.id) {
            let updateItem = { ...item, is_done: !item.is_done };
            console.log(updateItem);
            return updateItem;
          }
          return item;
        });
        setTodoList(updatedTodos);
      };

      const remove = (todo) => {
        console.log("inside remove" ,todo);
        let filterTodos = todoList.filter((item) => item.id !== todo.id);
        setTodoList(filterTodos);
      };

      const create = newTodo => {
        console.log(newTodo);
        setTodoList([...todoList, newTodo])
    }
    console.log(todoList)

    const todosList = todoList.map(todo => (
        <Todo
            key={todo.id}
            remove={remove}
            done={done}
            update={update}
            todo={todo}
            save={save}
        />
    ))
    console.log(todoList)

    return (
        <div className="todolist-container">
            <TodoForm createTodo={create} />
            <ul className="todo-list"> {todosList}</ul>
        </div>
    )        
}

export default TodoList
