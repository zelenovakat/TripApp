import React from "react"
import { useParams } from "react-router-dom"
import { useTrips } from "../../stores/TripStore"
import styled from "styled-components"
import moment from "moment"
import { Link } from "react-router-dom"
import DaysWithEvents from "./DaysWithEvents"

const SingleTrip = () => {
  const { tripId } = useParams()
  const { getTripById } = useTrips()
  const trip = getTripById(tripId)

  const tripTo = moment(trip.to)
  const tripFrom = moment(trip.from)
  const difference = tripTo.diff(tripFrom, "days") || 0

  return (
    <MainWrapper>
      <TripInfo title={trip.title}>
        <InfoBackground>
          <p>
            {difference} days in <City>{trip.title}</City>
          </p>
          <p>{trip.numberOfPeople} persons</p>
        </InfoBackground>
      </TripInfo>
      <Button>
        <Link to={`/trips/${trip.id}/AddEvent`}>Add event</Link>
      </Button>

      <RowWrapper>
        <MiddleLine></MiddleLine>

        <DaysWithEvents trip={trip} />
      </RowWrapper>
    </MainWrapper>
  )
}

export default SingleTrip

const Button = styled.button`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 15px;
  margin-bottom: 50px;
  font-size: 20px;
  color: white;
  border-radius: 15px;
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

const InfoBackground = styled.div`
  position: relative;
  padding: 24px 16px;

  p {
    position: relative;
  }

  &:before {
    content: "";
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`

const City = styled.span`
  font-size: 48px;
  font-weight: bold;
  text-transform: capitalize;
`

const TripInfo = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${(props) =>
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

const MainWrapper = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const MiddleLine = styled.div`
  position: absolute;
  width: 1px;
  z-index: 1;
  background: gray;
  left: 50%;
  height: 100%;
`
const RowWrapper = styled.div`
  position: relative;

  div:nth-child(2) {
    position: relative;
    z-index: 2;
  }
`
