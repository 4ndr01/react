// avec JS
function handleClick() {
  alert('Click depuis JS');  
}
document.getElementById('js_button').innerHTML = `<button onclick="handleClick()">Click (JS)</button>`;

// avec React en JSX
function MyButton() {
  function handleClick() {
    alert('Click depuis React')
  }

  return <button onClick={handleClick}>Click (React)</button>
}

const rootNode = document.getElementById('button-root')
const root = ReactDOM.createRoot(rootNode)
root.render(<MyButton />)
