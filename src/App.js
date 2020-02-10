import React from "react"
import "./App.css"
import Login from "./pages/Login"
import Trips from "./pages/Trips"
import SingleTrip from "./pages/SingleTrip"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import styled from "styled-components"
import { ProvideTrips } from "./stores/TripStore"

const App = () => {
  return (
    <ProvideTrips>
      <Router>
        <div>
          <StyledUl>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/trips">Trips</Link>
            </li>
          </StyledUl>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/trips/:tripId">
              <SingleTrip />
            </Route>
            <Route path="/trips">
              <Trips />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideTrips>
  )
}

export default App

const StyledUl = styled.ul`
  margin: 0;
`
