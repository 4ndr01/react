import { useState } from 'react'
import './App.css';



export default function App() {


        return (
            <div className="App">
                <h1>Todo List</h1>
                <ul>
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                    createTodo={createTodo}
                </ul>
                <ul>
                    todos={todos}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                </ul>
            </div>
        );
    const [todos, setTodos] = useState(initialData)
    const [newTodo, setNewTodo] = useState('')
    const [filter, setFilter] = useState('all')


    const createTodo = description => {
        const newTodo = {
            id: todos.length + 1,
            description,
            isComplete: false
        }
        setTodos([...todos, newTodo])
    }

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const updateTodo = (newTodo) => {
        const newTodos = todos.map(todo => {
            if (todo.id === newTodo.id) {
                return newTodo
            }
            return todo
        })
        setTodos(newTodos)
    }

    return;
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
]







