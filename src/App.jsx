import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/Home'
import AddVendor from './components/AddVendor'
import AddStall from './components/AddStall'
import AddFood from './components/AddFood'
import ViewVendor from './components/ViewVendor'
import View from './components/ViewStall'
import ViewFood from './components/ViewFood'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/addVendor' element={<AddVendor />} />
          <Route path='/addStall' element={<AddStall />} />
          <Route path='/addFood' element={<AddFood />} />
          <Route path='/viewVendor' element={<ViewVendor />} />
          <Route path='/viewStall' element={<View />} />
          <Route path='/viewFood' element={<ViewFood />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
