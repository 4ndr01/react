import { useState } from 'react'

// Composant formulaire pour la récupération du nom de la todo
const InputTodo = ({onCreateTodo}) => { // prend en param la fonction de modification du tableau todos. Le tableau todos n'est pas accessible autrement depuis ce composant
  const [ description, setDescription ] = useState('') // je déclare une variable d'état locale pour la gestion de l'input du form

  return( //je renvoie le template du composant
    <>
      <h1>Todo List</h1>
      <form id="todo_form" onSubmit={(e) => { // je détecte l'évènement submit du form
        e.preventDefault(); // je désactive le comportement par défaut (page reload, on ne veut surtout pas recharger la page)
        if(!description) // si description est vide au form submit
          return  //  on sors de la fonction pour ne pas ajouter un todo vide
        onCreateTodo(description) // j'appelle la fontion d'ajout de todo au tableau todos reçue en param du composant
        setDescription('') // je réinitialise le contenu de l'input pour la prochaine saisie
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

export default InputTodo // j'exporte le comosant pour l'invoquer dans le fichier App.js
