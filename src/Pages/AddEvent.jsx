import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { useEvents } from "../stores/EventStore"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useTrips } from "../stores/TripStore"
import moment from "moment"
import { getNewId } from "../components/GetNewId"
import Title from "../components/Title"
import StyledButton from "../components/StyledButton"

export default function AddEvent() {
  const { tripId } = useParams()
  const { getTripById } = useTrips()
  const trip = getTripById(tripId)

  const { createEvents } = useEvents()

  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()

  const onSubmit = (data) => {
    createEvents(data)
    history.push(`/trips/${trip.id}`)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Title>Create Event</Title>
      <Input name="id" type="hidden" value={getNewId()} ref={register} />

      <Label>Title</Label>
      <Input name="title" defaultValue="" ref={register} />

      <Label>Description</Label>
      <Input name="description" defaultValue="" ref={register} />

      <Label>Date</Label>
      <Input
        type="date"
        name="from"
        defaultValue="from"
        ref={register({
          validate: (value) => moment(value).isAfter(trip.from) && moment(value).isBefore(trip.to),
        })}
      />
      {errors.from && <span>Please enter correct date</span>}

      <Label>Time</Label>
      <Input type="time" name="time" defaultValue="time" ref={register} />
      <Input name="tripId" type="hidden" value={trip.id} ref={register} />

      <ButtonWrapper>
        <StyledButtonWrapper type="submit">Submit</StyledButtonWrapper>
      </ButtonWrapper>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;

  span {
    color: #4687a8;
    display: flex;
    justify-content: center;
  }
  h2 {
    display: flex;
    justify-content: center;
  }
`
const Input = styled.input`
  background: #f8f8f8;
  border: 2px solid #e5e5e5;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  color: #484848;
  outline: none;
  &:focus {
    border: 2px solid #4687a8;
  }
`
const Label = styled.label`
  margin-left: 10px;
  color: #484848;
  font-weight: normal;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const StyledButtonWrapper = styled(StyledButton)`
  padding: 10px 100px;
`
