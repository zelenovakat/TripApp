import React from "react"
import { useParams } from "react-router-dom"
import { useTrips } from "../../stores/TripStore"
import styled from "styled-components"
import moment from "moment"
import { Link } from "react-router-dom"
import DaysWithEvents from "./DaysWithEvents"
import Title from "../../components/Title"
import StyledButton from "../../components/StyledButton"

const SingleTrip = () => {
  const { tripId } = useParams()
  const { getTripById } = useTrips()
  const trip = getTripById(tripId)

  const tripTo = moment(trip.to)
  const tripFrom = moment(trip.from)
  const difference = tripTo.diff(tripFrom, "days") || 0

  return (
    <MainWrapper>
      <Title>Create Your Trip</Title>
      <TripInfo title={trip.title}>
        <InfoBackground>
          <p>
            {difference} days in <City>{trip.title}</City>
          </p>
          <p>{trip.numberOfPeople} persons</p>
        </InfoBackground>
      </TripInfo>
      <ButtonWrapper>
        <StyledButton>
          <Link type="button" to={`/trips/${trip.id}/new-trip`}>
            Add event
          </Link>
        </StyledButton>
      </ButtonWrapper>
      <RowWrapper>
        <MiddleLine></MiddleLine>
        <DaysWithEvents trip={trip} />
      </RowWrapper>
    </MainWrapper>
  )
}

export default SingleTrip

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #ffffff;
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
  font-size: 27px;
  font-weight: normal;
  text-transform: capitalize;
`

const TripInfo = styled.div`
  min-height: 500px;
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
    font-weight: normal;
    margin: 0;
    color: #ffffff;
    z-index: 2;
  }
`

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 15px;
`
const MiddleLine = styled.div`
  position: absolute;
  width: 1px;
  z-index: 1;
  background: #484848;
  left: 50%;
  height: 100%;
`
const RowWrapper = styled.div`
  position: relative;
  background: #ffffff;
  div:nth-child(2) {
    position: relative;
    z-index: 2;
  }
`
