import ItemTodo from './ItemTodo' // j'importe le composant ItemTodo qui représente chaque élément de la liste du composant ListTodos

const ListTodos = ({todos, onUpdateTodo, onDeleteTodo}) => { // je récupère en param le tableau todos en lecture seule pour construire la liste et la fonction de modification du tableau
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li className="todo-list__item" key={todo.id}>
          <ItemTodo 
            todo={todo}
            onUpdateTodo={onUpdateTodo}
            onDeleteTodo={onDeleteTodo}
          />
        </li>
        ))}
    </ul>
  )
}

export default ListTodos
