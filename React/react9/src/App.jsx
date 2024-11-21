import Form2 from './components/Form2'
import Form from './components/Form'
import FormCheckBox from './components/FormCheckBox'
import CheckEmail from './components/CheckEmail'
import EmailValidationForm from './components/ControlledComponent4'
import './App.css'

function App() {


  return (
    <>
    <Form/>
    <Form2/>
    <FormCheckBox/>
    <CheckEmail/>
    <EmailValidationForm/>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
