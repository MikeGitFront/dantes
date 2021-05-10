import React from 'react'
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import styled from 'styled-components'
import { Switch, Route } from "react-router"
import User from './pages/User'
import Rooms from './pages/Rooms'
import Contacts from './pages/Contacts'
import Faq from './pages/Faq'
import Invite from './pages/Invite'
import Suggest from './pages/Suggest'
import Leaders from './pages/Leaders'
import Search from './pages/Search'
import About from './pages/About'
import { useState } from "react"
import Login from "./pages/Login"
import Background from './images/111.jpg';

const Application = styled.div`
    width:100%;
    height:100vh;
    background-color:#fff;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

const Wrapper = styled.div`

`

export const MyContext = React.createContext()

const App = () => {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <MyContext.Provider value={{ isLogged, setIsLogged }}>
      <Application style={{
        backgroundImage: `url('${Background}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <Header />
        <Switch>
          <Wrapper>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/invite" component={Invite} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/leaders" component={Leaders} />
            {isLogged
              ?
              <Route exact path="/user" component={User} />
              :
              <Route exact path="/login" component={Login} />
            }
            <Route exact path="/rooms" component={Rooms} />
            <Route exact path="/suggest" component={Suggest} />
            <Route exact path="/search" component={Search} />
          </Wrapper>
        </Switch>
        <Footer />
      </Application>
    </MyContext.Provider>
  )
}

export default App;
