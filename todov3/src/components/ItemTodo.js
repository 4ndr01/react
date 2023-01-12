import { useContext, useState } from 'react';
import { TodosContext } from '../context/todosContext';

const ItemTodo = ({todo}) => {
  const [isEditing, setIsEditing] = useState(false);
  const todosContext = useContext(TodosContext);
  const [description, setDescription] = useState(todo.description);
  let itemContent;

  if(isEditing) {
    itemContent = (
      <>
        <input 
          type="text" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button 
          type="button" 
          className="btn-save"
          onClick={() => {
            todosContext.updateTodo({
              ...todo,
              description: description,
              done: false
            })
            setIsEditing(false)
          }}><i className="fa-solid fa-save"></i></button>
      </>
    )
  } else {
    itemContent = (
      <>
        <input 
          type="text" 
          value={description}
          className={todo.done ? 'done':''}
          readOnly={true}
          onChange={(e) => {}}
        />
        <button 
          type="button" 
          onClick={() => setIsEditing(true)}><i className="fa-solid fa-pen"></i></button>
      </>
    )
  }

  return (
    <>
      {itemContent}
      <button 
        type="button" 
        className={todo.done && !isEditing ? 'btn-check':''}
        disabled={isEditing}
        onClick={() => {
          todosContext.updateTodo({
            ...todo,
            done: !todo.done
          })
        }}><i className="fa-solid fa-check"></i></button>
      <button 
          type="button" 
          className="btn-remove"
          onClick={() => todosContext.deleteTodo(todo.id)}><i className="fa-solid fa-trash"></i></button>
    </>
  )
}

export default ItemTodo
