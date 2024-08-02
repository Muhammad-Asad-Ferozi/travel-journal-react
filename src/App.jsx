import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '/src/components/Card.jsx'
import Nav from '/src/components/Nav.jsx'
import data from './data.jsx'
function App() {

  const cards  = data.map((item) => (
    <Card  {...item} />
  ))
  console.log(cards);
  return (
    <>
      <Nav />
      <div  className='flex flex-col items-center justify-center p-20 gap-20'>
        {cards}
      </div>
    </>
  )
}

export default App
