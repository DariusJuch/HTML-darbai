import PofileCard from './components/ProfileCard'
import './App.css'


const users =  {
  username: "Ambre Dubois",
  tag: "adubois",
  location: "Valensole, France",
  avatar: "https://picsum.photos/id/64/250/250",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
} 
function App() {
  return (
    <>
      <PofileCard/>
    </>
  )
}

export default App