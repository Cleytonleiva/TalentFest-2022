import { useState } from 'react'
import {ProductProvider} from './context/productContext'
import {RegionComunaProvider} from './context/regionComunaContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>HOLA TALENT FEST</h1>
      <ProductProvider />
      <RegionComunaProvider />
    </div>

  )
}

export default App
