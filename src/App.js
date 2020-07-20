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
                <List>
                  <Link to="/trips">
                    <FontAwesomeIcon icon={faAngleLeft} /> trips
                  </Link>
                </List>
                <AddEvent />
              </Route>
              <Route path="/trips/:tripId">
                <List>
                  <Link to="/trips">
                    <FontAwesomeIcon icon={faAngleLeft} /> trips
                  </Link>
                </List>
                <SingleTrip />
              </Route>
              <Route path="/newTrip">
                <List>
                  <Link to="/trips">
                    <FontAwesomeIcon icon={faAngleLeft} /> trips
                  </Link>
                </List>
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

const List = styled.li`
  color: #000000;
  list-style-type: none;
  a {
    color: #000000;
    text-decoration: none;
  }
`
