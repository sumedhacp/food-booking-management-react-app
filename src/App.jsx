import { useState } from 'react'
import './App.css'

import AddStall from './components/AddStall'
import ViewFood from './components/ViewFood'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddStall />
      <ViewFood />
    </>
  )
}

export default App