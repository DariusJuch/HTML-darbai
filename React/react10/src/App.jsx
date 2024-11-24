import Calendar from './components/Calendar'
import './App.css'

function App() {

const num = 31;
  return (
    <>
      <div className=' flex flex-col gap-4 bg-white text-black justify-center items-center'>
        <div className=' flex flex-col gap-4'>
          <h1>30 Days Of React</h1>
          <p>Number Generator</p>
        </div>
        <Calendar num={num}/>
      </div>
    </>
  )
}

export default App
