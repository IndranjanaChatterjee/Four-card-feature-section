import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main_page from './Components/Main_page'
import Box from './Components/Box'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='w-full h-full flex flex-col justify-center items-center gap-7 mt-2'>
    <Main_page/>
    <Box/>
    </section>
      
    </>
  )
}

export default App
