// créer un élément <p> avec React
let p = React.createElement('p', null, 'Hello React !');

// récupérer mon conteneur React
const rootNode = document.getElementById('app');

// créer la racine de mon contexte React
const root = ReactDOM.createRoot(rootNode);
// afficher le rendu de mon élément
root.render(p);
