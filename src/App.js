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
import { mediaXs } from "../src/utils/Screen"
const App = () => {
  return (
    <ProvideTrips>
      <ProvideEvents>
        <Router>
          <Wrapper>
            <Switch>
              <Route path="/trips/:tripId/new-trip">
                <List>
                  <Link to="/trips">
                    <FontAwesomeIcon icon={faAngleLeft} /> Back
                  </Link>
                </List>
                <AddEvent />
              </Route>
              <Route path="/trips/:tripId">
                <List>
                  <Link to="/trips">
                    <FontAwesomeIcon icon={faAngleLeft} /> Back
                  </Link>
                </List>
                <SingleTrip />
              </Route>
              <Route path="/new-trip">
                <List>
                  <Link to="/trips">
                    <FontAwesomeIcon icon={faAngleLeft} /> Back
                  </Link>
                </List>
                <NewTrip />
              </Route>
              <Route path="/">
                <Trips />
              </Route>
            </Switch>
          </Wrapper>
        </Router>
      </ProvideEvents>
    </ProvideTrips>
  )
}

export default App

const List = styled.li`
  color: #484848;
  list-style-type: none;
  margin: 15px;
  a {
    color: #484848;
    text-decoration: none;
  }
`
const Wrapper = styled.div`
  ${mediaXs} {
    margin: 10px 400px;
  }
`
