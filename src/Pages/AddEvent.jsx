import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { useEvents } from "../stores/EventStore"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useTrips } from "../stores/TripStore"
import loginCover from "../images/loginCover.jpg"
import moment from "moment"
import { getNewId } from "../components/GetNewId"

export default function AddEvent() {
  const { tripId } = useParams()
  const { getTripById } = useTrips()
  const trip = getTripById(tripId)

  const { createEvents } = useEvents()

  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()

  const onSubmit = data => {
    createEvents(data)
    history.push(`/trips/${trip.id}`)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <h2>ADD EVENT</h2>
      <StyleInput name="id" type="hidden" value={getNewId()} ref={register} />
      <StyleLabel>description</StyleLabel>
      <StyleInput name="description" defaultValue="" ref={register} />

      <StyleLabel>title</StyleLabel>
      <StyleInput name="title" defaultValue="" ref={register} />

      <StyleLabel>date</StyleLabel>
      <StyleInput
        type="date"
        name="from"
        defaultValue="from"
        ref={register({
          validate: value => moment(value).isAfter(trip.from) && moment(value).isBefore(trip.to),
        })}
      />
      {errors.to && <span>Please enter correct date</span>}
      <StyleLabel>time</StyleLabel>
      <StyleInput type="time" name="time" defaultValue="time" ref={register} />

      <StyleInput name="tripId" type="hidden" value={trip.id} ref={register} />
      <InputWrapper>
        <StyleInput type="submit" />
      </InputWrapper>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  /* background-image: url(${loginCover}); */
  span {
    color: white;
    display: flex;
    justify-content: center;
  }
  h2{
    color: white;
    display: flex;
  justify-content: center;

  }
`
const StyleInput = styled.input`
  color: white;
  text-transform: uppercase;
  background: none;
  border: 3px solid white;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  margin: 10px;
  width: 300px;
  padding: 10px;
  border-radius: 10px;
`
const StyleLabel = styled.label`
  margin-left: 10px;
  font-weight: bold;
  color: white;
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    background-color: #f20cc0;
    color: white;
    text-decoration: none;
  }
`
