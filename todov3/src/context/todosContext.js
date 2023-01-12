import {createContext, useEffect, useState} from 'react';

export const TodosContext = createContext(null);

const API= {
    getTodos: () => {
        return fetch('http://localhost:3001/todos\n')
        .then(response => response.json())
    }
}

const rebuildTodos = (todos) => {
    return todos.map(todo => {
        return {
            ...todo,
            completed: todo.completed ? 'completed' : ''
        }
    })
}

export function TodosProvider ({children}) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    API.getTodos().then((todos) => {
      rebuildTodos(todos);
    },[]);
  });

  const createTodo = description => {
    const newTodo = {
        description,
        completed: false

    }

    setTodos([
      ...todos,
      {
        id: nextId++,
        description: description,
        done: false
      }
    ])
      API.createTodo()
  }
  
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const updateTodo = (newTodo) => {
    setTodos(todos.map(todo => {
        API.updateTodo({
            ...todo,
            completed: todo.completed ? 'completed' : ''
        })

      if(todo.id === newTodo.id) {
        return newTodo
      } else {
        return todo
      }
    }))
  }

  return (
    <TodosContext.Provider value={{
        todos, 
        createTodo,
        deleteTodo,
        updateTodo
    }}>
        {children}
    </TodosContext.Provider>
  );
}

const initialData = [
  {
    id: 1,
    description: 'todo 1',
    done: true
  },
  {
    id: 2,
    description: 'todo 2',
    done: false
  },
  {
    id: 3,
    description: 'todo 3',
    done: false
  }
];

let nextId = initialData.length + 1
