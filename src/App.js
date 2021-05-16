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
import Background from './images/background.jpg';
import { v4 as uuidv4 } from 'uuid'
import Room from './components/room/Room'

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
  const [currentRooms, setCurrentRooms] = useState([
    {
      // title: 'First room',
      category: 'sport',
      full: false,
      image: '',
      allowedAge: '6',
      id: uuidv4(),
    },
    {
      // title: 'Second room',
      category: 'sport',
      full: false,
      image: '',
      allowedAge: '6',
      id: uuidv4(),
    },
    {
      // title: 'Third room',
      category: 'sport',
      full: false,
      image: '',
      allowedAge: '6',
      id: uuidv4(),
    },
    {
      // title: 'Fourth room',
      category: 'sport',
      full: false,
      image: '',
      allowedAge: '6',
      id: uuidv4(),
    },
    {
      // title: 'Fifth room',
      category: 'sport',
      full: false,
      image: '',
      allowedAge: '6',
      id: uuidv4(),
    },
    {
      // title: 'Sixth room',
      category: 'sport',
      full: false,
      image: '',
      allowedAge: '6',
      id: uuidv4(),
    },
    {
      // title: 'Seventh room',
      category: 'sport',
      full: false,
      image: '',
      allowedAge: '6',
      id: uuidv4(),
    },
    {
      // title: 'Eights room',
      category: 'sport',
      full: false,
      image: '',
      allowedAge: '6',
      id: uuidv4(),
    },
    {
      // title: 'Ninth room',
      category: 'sport',
      full: false,
      image: '',
      allowedAge: '6',
      id: uuidv4(),
    },
  ])

  const [currentLeaders, setCurrentLeaders] = useState([
    {
      name: 'Alex',
      country: 'BLR',
      favouriteCompetition: 'Sitting',
      score: 561
    },
    {
      name: 'Max',
      country: 'RUS',
      favouriteCompetition: 'Pull ups',
      score: 541
    },
    {
      name: 'Ilya',
      country: 'UA',
      favouriteCompetition: 'Singing',
      score: 511
    },
    {
      name: 'Kate',
      country: 'BLR',
      favouriteCompetition: 'Cooking',
      score: 411
    },
    {
      name: 'Mike',
      country: 'BLR',
      favouriteCompetition: 'Scissors',
      score: 300
    },
    {
      name: 'Alexa',
      country: 'UK',
      favouriteCompetition: 'Origami',
      score: 200
    },
  ])

  const providerValues = {
    isLogged,
    setIsLogged,
    setCurrentRooms,
    currentRooms,
    currentLeaders
  }

  return (
    <MyContext.Provider value={providerValues}>
      <Application style={{
        backgroundImage: `url('${Background}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <Header />
        <Switch>
          <Wrapper>
            <Route exact path="/room" component={Room} />
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/invite" component={Invite} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/leaders"  >
              <Leaders currentLeaders={currentLeaders} />
            </Route>
            {isLogged
              ?
              <Route exact path="/user" component={User} />
              :
              <Route exact path="/login" component={Login} />
            }
            <Route exact path="/rooms"  >
              <Rooms rooms={currentRooms} />
            </Route>
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
