/*
  Afficher une alerte suite au clic sur un bouton : JS vs React
*/

// avec JS
const myBtnEl = document.createElement('button');
myBtnEl.innerText = 'Click (JS)';
document.getElementById('js_button').append(myBtnEl);
myBtnEl.addEventListener('click', handleClick);
function handleClick () {
  alert('Click depuis JS');  
}


// avec React
// déclaration de mon composant MyButton avec une fonction
function MyButton() {

  // déclaration de la fonction à exécuter au clic sur le bouton
  function handleClick() {
    alert('Click depuis React');
  }

  return React.createElement(
    'button', // type d'élément html
    {
      onClick: handleClick, // fonction appelée au clic
    },
    'Click (React)' // texte du bouton
  )
}

// récupérer mon conteneur React
const rootNode = document.getElementById('react_button')
// créer la racine de mon contexte React
const root = ReactDOM.createRoot(rootNode)
// afficher le rendu de mon composant
root.render(React.createElement(MyButton))
