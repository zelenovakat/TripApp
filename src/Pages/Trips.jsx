import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useTrips } from "../stores/TripStore"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"

const Trips = () => {
  const { trips } = useTrips()
  const { removeTrip } = useTrips()
  const handleRemoveTrip = TripId => {
    removeTrip(TripId)
  }
  const mapedTrips = trips.map(trip => {
    return (
      <Main key={trip.id}>
        <StyledDiv to={`/trips/${trip.id}`} title={trip.title}>
          <p>{trip.title}</p>
          <p>
            {trip.from}-{trip.to}
          </p>
          <p>{trip.numberOfPeople}</p>
        </StyledDiv>
        <Button onClick={() => handleRemoveTrip(trip.id)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </Main>
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
      <StyledLi>
        <StyledButton>
          <Link to="/newTrip">New Trip</Link>
        </StyledButton>
      </StyledLi>
    </>
  )
}

export default Trips
const Title = styled.h2`
  color: white;
`
const Main = styled.div`
  flex-direction: column;
  width: 100%;
`

const Button = styled.button`
  color: red;
  font-size: large;
`
export const StyledButton = styled.button`
  margin: 15px;
  font-size: 20px;
  color: white;
  border-radius: 15px;
  padding: 8px 16px;
  -webkit-text-stroke: medium;
  a {
    text-decoration: none;
    color: darkslategray;
  }
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
  display: flex;
  flex-direction: column;
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
      border: 2px solid white;
    `}
`
const TripsWrapper = styled.div`
  display: flex;
`

const ScrollArea = styled.div`
  overflow-x: scroll;
`
const StyledLi = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: center;
`
