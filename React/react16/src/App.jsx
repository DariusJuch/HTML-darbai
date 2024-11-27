import { useState } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import './App.css'

function App() {
  const [isopen, setIsOpen] = useState(false);


  return (
    <>
      <Header setIsOpen={setIsOpen}/>
      <AddTask isopen={isopen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default App
