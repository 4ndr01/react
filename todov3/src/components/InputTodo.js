import { useContext, useState } from 'react'
import { TodosContext } from '../context/todosContext';

const InputTodo = () => {
  const [ description, setDescription ] = useState('')
  const todosContext = useContext(TodosContext);

  return(
    <>
      <h1>Todo List</h1>
      <form id="todo_form" onSubmit={(e) => {
        e.preventDefault()
        if(!description) 
          return
        todosContext.createTodo(description)
        setDescription('')
        }}>
        <input 
          id="todo_input"
          type="text" 
          placeholder="ajouter une tâche" 
          value={description} 
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit" className="btn"><i className="fa-solid fa-plus"></i></button>
      </form>
    </>
  )
}

export default InputTodo
