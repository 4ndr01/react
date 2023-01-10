import { useState } from 'react'
import './App.css';

// imports des différents composants
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'

// composant racine de mon application
export default function App() {
  const [todos, setTodos] = useState(initialData) // variable d'état globale contenant les todos sous forme de tableau, je l'initialise avec les données du tableau initialData (en bas de page)

  // fonctions pour la manipulation du tableau déclarées au niveau du composant racine
  const createTodo = description => { // fonction pour ajouter un todo au tableau todos, prends en param la valeur récupérée depuis le form
    setTodos([ // je modifie le tableau todos en l'affectant aux données existantes augmentée d'un nouvel objet todo
      ...todos, // pour celau j'utilise l'opérateur ...spread
      {
        id: nextId++, // nouveau todo avec id unique
        description: description, // le param récupéré du form
        done: false // la todo est non finie par défaut
      }
    ])
  }
  
  const deleteTodo = id => { // fonction pour supprimer un todo du tableau grâce à son id unique
    setTodos(todos.filter(todo => todo.id !== id)) // Array.filter renvoie un nouveau tableau avec tous les todos sauf celui que l'on veut modifier
  }

  const updateTodo = (newTodo) => { // fonction pour mettre à jour un todo existant, je récupère en param l'objet todo en entier
    setTodos(todos.map(todo => { // je génère un nouveau tableau en remplaçant le todo à modifier par l'objet reçu en paramètre
      if(todo.id === newTodo.id) {
        return newTodo
      } else {
        return todo
      }
    }))
  }

  return ( // je construis le rendu de mon application avec les différents composants, je passe en prop les foncitons de manipulation pour pouvoir modifier le tableau todos depuis les composants enfants
    <section className="wrapper">
      <InputTodo onCreateTodo={createTodo} />
      <ListTodos 
        todos={todos}
        onUpdateTodo={updateTodo}
        onDeleteTodo={deleteTodo} />
    </section>
  );
}

// données pour l'initialisation de l'application
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

// le compteur pour l'id unique. Comme il y a 3 todo de base il faut commencer à compter à partir de 4
let nextId = initialData.length + 1
