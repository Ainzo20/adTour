import './App.css'
import Card from './components/Card/card'
import LoginPage from './pages/LoginPage/LoginPage'

function App() { 

  return (
    <>
    {/* <LoginPage/> */}
    <Card name={'karls'} imageUrl={'src/assets/Login/trave.jpg'} description={'the only place to be'} onClick={function (): void {
        throw new Error('Function not implemented.')
      } }></Card>
    </>
  )
}

export default App
