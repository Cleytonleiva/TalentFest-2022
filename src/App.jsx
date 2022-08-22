import { useState } from 'react'
import {ProductProvider} from './context/productContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>HOLA TALENT FEST</h1>
      <ProductProvider />
    </div>

  )
}

export default App
