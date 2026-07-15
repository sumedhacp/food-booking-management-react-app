import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStall from './components/AddStall'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<AddStall />
    </>
  )
}

export default App
