import React from "react"
import { useParams } from "react-router-dom"
import { useTrips } from "../stores/TripStore"
import styled from "styled-components"

const SingleTrip = () => {
  let { tripId } = useParams()
  const { getTripById } = useTrips()
  const trip = getTripById(tripId)
  return (
    <DivWrapper>
      <StyledDiv cover={trip.cover}>
        <div>{trip.title}</div>
        <div>
          {trip.from}-{trip.to}
        </div>
        <div>{trip.numberOfPeople}</div>
      </StyledDiv>
      <div>{}</div>
    </DivWrapper>
  )
}

export default SingleTrip

const StyledDiv = styled.div`
  padding: 0 24px 16px;
  margin: 10px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  background-size: cover;
  div {
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
const DivWrapper = styled.div`
  display: flex;
`
