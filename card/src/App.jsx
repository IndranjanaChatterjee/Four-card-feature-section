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
    <p class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://www.frontendmentor.io/profile/IndranjanaChatterjee">Indranjana Chatterjee</a>.
    </p>
    </section>
      
    </>
  )
}

export default App
