import ItemTodo from './ItemTodo';
import {TodosContext } from '../context/todosContext';
import { useContext } from 'react';

const ListTodos = () => {
  const todosContext = useContext(TodosContext);

  return (
    <ul className="todo-list">
      {todosContext.todos.map(todo => (
        <li className="todo-list__item" key={todo.id}>
          <ItemTodo 
            todo={todo}
          />
        </li>
        ))}
    </ul>
  )
}

export default ListTodos
