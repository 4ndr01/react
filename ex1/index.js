// déclaration des données
const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
]


// déclaration du composant ligne de table
function ProductRow({ product }) {// prend en entrée un tableau product
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return(
    <tr style={
        product.stocked ? {color: 'black'} : {color: 'red'}
    }>
        <td>{product.name}</td>
        <td>{product.price}</td>
    </tr>
  )
}

// déclaration du composant tableau
function ProductTable({ products }) { // prend en entrée un tableau product
  return(
    <table>
        <thead>
            <tr>
                <tr>
                    <th colSpan="2">
                        {products[0].category}
                    </th>
                </tr>

                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {products.map(product => <ProductRow product={product} />)}
        </tbody>
    </table>

  )
}

// déclaration du composant app
function App() {
  return <ProductTable products={PRODUCTS} />
}

const rootNode = document.getElementById('app')
const root = ReactDOM.createRoot(rootNode)
root.render(<App />)
