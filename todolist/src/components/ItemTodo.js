import { useState } from "react"

const ItemTodo = ({todo, onDeleteTodo, onUpdateTodo}) => { // je récupère en param le todo à afficher et les fonctions de modification du tableau todos
  const [isEditing, setIsEditing] = useState(false) // je déclare une variable d'état locale pour gérer le mode edit de chaque element todo
  let itemContent = ''; // je déclare une variable local pour la gestion du rendu conditionnel

  if(isEditing) { // si on est en mode edit
    itemContent = ( // je renvoie le template avec un input text
      <>
        <input 
          type="text" 
          value={todo.description}
          onChange={(e) => {
            onUpdateTodo({ // j'invoque la fonction de mise à jour d'un todo
              ...todo,  // j'utilise l'opérateur ...spread dans un objet : il expose les propriétés de l'objet todo sauf celles que je modifie en dessous
              description: e.target.value,
              done: false
            })
          }}
        />
        <button 
          type="button" 
          className="btn-save"
          onClick={() => setIsEditing(false)}><i className="fa-solid fa-save"></i></button>
      </>
    )
  } else { // si on est en mode lecture
    itemContent = ( // je renvoie un template avec input text en readonly
      <>
        <input 
          type="text" 
          value={todo.description}
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

  return ( // je renvoie le template du composant, itemContent
    <>
      {itemContent}
      <button 
        type="button" 
        className={todo.done && !isEditing ? 'btn-check':''}
        disabled={isEditing}
        onClick={() => {
          onUpdateTodo({
            ...todo, // même principe j'utilise l'opérateur ...spread, je prends toutes les propriétés existantes de todo sauf done que je modifie en dessous
            done: !todo.done
          })
        }}><i className="fa-solid fa-check"></i></button>
      <button 
          type="button" 
          className="btn-remove"
          onClick={() => onDeleteTodo(todo.id)}><i className="fa-solid fa-trash"></i></button>
    </>
  )
}

export default ItemTodo
