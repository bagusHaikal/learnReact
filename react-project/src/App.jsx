import Header from './header'
import Footer from './footer'
import Food from './food'
import Button from './button'
import UserGreeting from './userGreeting'

function App() {
    return (
      <>
      <Header/>
      <Food daftarMinuman="tuak" daftarApa={false} />
      <Button/>
      <UserGreeting isLoggedIn={false} username="ahmed" />
      <Footer/>
      </>
    )
}

export default App
