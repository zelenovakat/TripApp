import React from "react"
import moment from "moment"
import { useEvents } from "../../stores/EventStore"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"

const DaysWithEvents = (props) => {
  const { trip } = props
  const { removeEvent } = useEvents()
  const { getEventsByTripId } = useEvents()
  const events = getEventsByTripId(trip.id)

  const handleRemoveEvent = (eventId) => {
    removeEvent(eventId)
  }
  const days = []
  for (const oneDay = moment(trip.from); oneDay.isBefore(trip.to); oneDay.add("days", 1)) {
    let daysWithEvents = {
      date: oneDay.format(),
      events: events.filter((event) => oneDay.isSame(event.from)),
    }
    days.push(daysWithEvents)
  }

  return (
    <Main>
      {days.map((day, i) => {
        return (
          <OneDay key={i}>
            <DaysDate>{moment(day.date).format("ddd DD.MM.YYYY")}</DaysDate>
            <Events>
              {day.events.map((event) => {
                return (
                  <EventWrapper key={event.id}>
                    <Button onClick={() => handleRemoveEvent(event.id)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                    <Time>{event.time}</Time>
                    <p>{event.description}</p>
                    <p>{event.title}</p>
                  </EventWrapper>
                )
              })}
            </Events>
          </OneDay>
        )
      })}
    </Main>
  )
}

export default DaysWithEvents

const Button = styled.button`
  color: #000000;
  text-align: right;
`

const OneDay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`

const DaysDate = styled.div`
  display: flex;
  width: 250px;
  background: antiquewhite;
  border: 2px solid #000000;
  border-radius: 15px;
  padding: 8px 4px;
  justify-content: center;
  color: #000000;
`
const EventWrapper = styled.div`
  display: flex;
  width: 250px;
  background: #ffffff;
  color: #000000;
  border: 2px solid #000000;
  border-radius: 15px;
  padding: 8px 4px;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`
const Main = styled.div``
const Events = styled.div`
  p {
    margin: 5px;
  }
`

const Time = styled.p`
  text-align: center;
  font-weight: bold;
  text-decoration: underline;
  margin-left: 100px;
`
