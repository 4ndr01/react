function MyButton() {
  const [count, setCount] = React.useState(0)


  function handleClick() {
    setCount( count + 1)
  }

  return (
    <button onClick = { handleClick }>
      Clicked { count } times
    </button>
  )
}

function App() {
  return(
    <>
      <h1>04_BoutonCount</h1>
      <MyButton />
    </>
  )
}

const rootNode = document.getElementById('app')
const root = ReactDOM.createRoot(rootNode)
root.render(<App />)
