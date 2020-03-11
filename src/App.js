import React from "react"
import "./App.css"
import Trips from "./pages/Trips"
import SingleTrip from "./pages/SingleTrip/Main"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import styled from "styled-components"
import { ProvideTrips } from "./stores/TripStore"
import NewTrip from "./pages/NewTrip"
import AddEvent from "./pages/AddEvent"
import { ProvideEvents } from "./stores/EventStore"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"

const App = () => {
  return (
    <ProvideTrips>
      <ProvideEvents>
        <Router>
          <div>
            <Switch>
              <Route path="/trips/:tripId/AddEvent">
                <StyledLi>
                  <Link to="/trips">
                    <FontAwesomeIcon icon={faAngleLeft} /> trips
                  </Link>
                </StyledLi>
                <AddEvent />
              </Route>
              <Route path="/trips/:tripId">
                <StyledLi>
                  <Link to="/trips">
                    <FontAwesomeIcon icon={faAngleLeft} /> trips
                  </Link>
                </StyledLi>
                <SingleTrip />
              </Route>
              <Route path="/newTrip">
                <StyledLi>
                  <Link to="/trips">
                    <FontAwesomeIcon icon={faAngleLeft} /> trips
                  </Link>
                </StyledLi>
                <NewTrip />
              </Route>
              <Route path="/">
                <Trips />
              </Route>
            </Switch>
          </div>
        </Router>
      </ProvideEvents>
    </ProvideTrips>
  )
}

export default App

const StyledLi = styled.li`
  color: white;
  list-style-type: none;
  a {
    color: white;
    text-decoration: none;
  }
`
