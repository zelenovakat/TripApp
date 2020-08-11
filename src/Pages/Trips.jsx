import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useTrips } from "../stores/TripStore"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import RemoveModal from "../components/RemoveModal"
import useModal from "../utils/useModal"
import Title from "../components/Title"
import StyledButton from "../components/StyledButton"
import moment from "moment"
const Trips = () => {
  const { trips } = useTrips()
  const { removeTrip } = useTrips()
  const [tripId, setTripId] = useState(0)
  const { isShowing, toggle } = useModal()
  const handleRemoveTrip = (tripId) => {
    removeTrip(tripId)
    toggle(false)
  }
  const closeRemoveTripModal = () => {
    toggle(false)
  }
  const toggleModal = (id) => {
    setTripId(id)
    toggle()
  }
  const mapedTrips = trips.map((trip) => {
    return (
      <Wrapper key={trip.id}>
        <Main>
          <MainView to={`/trips/${trip.id}`} title={trip.title}>
            <TitleTrips>
              <NameTrip>{trip.title}</NameTrip>
              <p>
                {moment(trip.from).format("DD.MM.YYYY")}-{moment(trip.to).format("DD.MM.YYYY")}
              </p>
              <NumberOfPeople>
                <p>{trip.numberOfPeople}</p>
                <FontAwesomeIcon icon={faUsers} />
              </NumberOfPeople>
            </TitleTrips>
          </MainView>
        </Main>
        <Button onClick={() => toggleModal(trip.id)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </Wrapper>
    )
  })

  return (
    <MainWrapper>
      <TitleWrapper>
        <Title>My Trips</Title>
      </TitleWrapper>
      <ScrollArea>
        <TripsWrapper>{mapedTrips}</TripsWrapper>
        <RemoveModal
          isShowing={isShowing}
          hide={toggle}
          handleRemoveTrip={() => handleRemoveTrip(tripId)}
          closeRemoveTripModal={closeRemoveTripModal}
        />
      </ScrollArea>
      <ButtonWrapper>
        <StyledButton>
          <Link to="/new-trip">New Trip</Link>
        </StyledButton>
      </ButtonWrapper>
    </MainWrapper>
  )
}

export default Trips
const Wrapper = styled.div`
  position: relative;
  margin-right: 15px;
`
const NumberOfPeople = styled.div`
  display: flex;
  svg {
    font-size: 20px;
    color: #ffffff;
    margin-left: 10px;
  }
`
const NameTrip = styled.p`
  font-weight: bold;
  padding-bottom: 10px;
`
const MainWrapper = styled.div`
  margin: 15px;
`
const TitleTrips = styled.div`
  padding: 10px 15px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-direction: column;
  width: 100%;
  position: relative;
`
const Button = styled.button`
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  width: 35px;
  border: 0;
  z-index: 9999;
  svg {
    font-size: 20px;
  }
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const MainView = styled(Link)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  min-width: 250px;
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
    font-size: 20px;
    margin: 0;
    color: #fff;
    z-index: 2;
  }

  ${(props) =>
    props.title &&
    `
      background: url("https://source.unsplash.com/900x1600/?${props.title}");
      background-size: cover;
      border-radius: 5px;
      overflow: hidden;
    `}
`
const TripsWrapper = styled.div`
  display: flex;
`
const ScrollArea = styled.div`
  overflow-x: scroll;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`
