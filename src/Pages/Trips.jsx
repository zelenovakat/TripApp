import React from "react"
import { Link } from "react-router-dom"
import Title from "../components/Title"

import styled from "styled-components"

import { useTrips } from "../stores/TripStore"

const Trips = () => {
  const { trips, setTrips } = useTrips()
  console.log(trips)

  const mapedTrips = trips.map(trip => {
    console.log(trip)
    return (
      <StyledDiv to={`/trips/${trip.id}`} cover={trip.cover} key={trip.id}>
        <p>{trip.title}</p>
        <p>
          {trip.from}-{trip.to}
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
    </>
  )
}

export default Trips

const TitleWrapper = styled.div`
  margin: 10px;
`

const StyledDiv = styled(Link)`
  padding: 0 24px 16px;
  margin: 10px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

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
    props.cover &&
    `
      background: url(${props.cover});
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
