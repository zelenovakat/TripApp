import React from "react"
import { useParams } from "react-router-dom"
import { useTrips } from "../stores/TripStore"
import styled from "styled-components"
import moment from "moment"

const SingleTrip = () => {
  let { tripId } = useParams()
  const { getTripById } = useTrips()
  const trip = getTripById(tripId)
  const a = moment(trip.to)
  const b = moment(trip.from)
  const difference = b.diff(a, "days")

  // for (const m = moment(a); m.isBefore(b); m.add(1, "days")) {
  //   console.log(m.format("YYYY-MM-DD"))
  // }
  const elements = ["2021.02.24", "2021.02.25", "2021.02.26", "2021.02.27", "2021.02.28"]
  const item = []
  for (const m = moment(a); m.isBefore(b); m.add(1, "days")) {
    item.push(m)
  }

  console.log({ difference })
  return (
    <DivWrapper>
      <StyledDiv title={trip.title}>
        <p>
          {difference} days in {trip.title}
        </p>
        <p>{trip.numberOfPeople}</p>
      </StyledDiv>

      <RowWrapper>
        <RowDiv></RowDiv>
        {elements.map(item => {
          return <p key={item}>{item}</p>
        })}
      </RowWrapper>
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

  ${props =>
    props.title &&
    `
      background: url("https://source.unsplash.com/900x1600/?${props.title}");
      background-size: cover;
    `}

  p {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    color: #fff;
    z-index: 2;
  }
`

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`
const RowDiv = styled.div`
  position: absolute;
  width: 1px;
  z-index: 2;
  background: grey;
  left: 50%;
  height: 25vh;
`
const RowWrapper = styled.div`
  p {
    display: flex;
    justify-content: center;
    border: 2px solid black;
    margin-right: 50px;
    margin-left: 55px;
    border-radius: 10px;
    background: grey;
  }
`
