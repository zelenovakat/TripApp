import React from "react"
import { Link } from "react-router-dom"
import Title from "../components/Title"
import styled from "styled-components"
import { useTrips } from "../stores/TripStore"

const Trips = () => {
  const { trips } = useTrips() // не забыть про setTrips
  console.log(trips)

  const mapedTrips = trips.map(trip => {
    return (
      <StyledDiv to={`/trips/${trip.id}`} title={trip.title} key={trip.id}>
        <p>{trip.title}</p>
        <p>
          {trip.to}-{trip.from}
        </p>
        <p>{trip.numberOfPeople}</p>
      </StyledDiv>
    )
  })

  return (
    <>
      <TitleWrapper>
        <Title>My Trips</Title>
      </TitleWrapper>
      <ScrollArea>
        <TripsWrapper>{mapedTrips}</TripsWrapper>
      </ScrollArea>
      <li>
        <StyledButton>
          <Link to="/newTrip">New Trip</Link>
        </StyledButton>
      </li>
    </>
  )
}

export default Trips

export const StyledButton = styled.button`
  margin: 15px;
  font-size: 20px;
  background: border-box;
  color: white;
  border-radius: 15px;
  -webkit-text-stroke: medium;
  &:hover {
    background-color: mediumaquamarine;
    color: black;
    text-decoration: none;
  }
  link {
    color: white;
  }
`

const TitleWrapper = styled.div`
  margin: 10px;
`

const StyledDiv = styled(Link)`
  padding: 0 24px 16px;
  margin: 10px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  min-width: 200px;
  text-decoration-line: none;

  /* Add dark overlay */
  &:before {
    content: "";
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  p {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    color: #fff;
    z-index: 2;
  }

  ${props =>
    props.title &&
    `
      background: url("https://source.unsplash.com/900x1600/?${props.title}");
      background-size: cover;
    `}
`
const TripsWrapper = styled.div`
  display: flex;
`

const ScrollArea = styled.div`
  width: 300px;
  overflow-x: scroll;
`
