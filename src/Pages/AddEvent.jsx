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

  const onSubmit = (data) => {
    createEvents(data)
    history.push(`/trips/${trip.id}`)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <h2>ADD EVENT</h2>
      <Input name="id" type="hidden" value={getNewId()} ref={register} />
      <Lable>description</Lable>
      <Input name="description" defaultValue="" ref={register} />

      <Lable>title</Lable>
      <Input name="title" defaultValue="" ref={register} />

      <Lable>date</Lable>
      <Input
        type="date"
        name="from"
        defaultValue="from"
        ref={register({
          validate: (value) => moment(value).isAfter(trip.from) && moment(value).isBefore(trip.to),
        })}
      />
      {errors.to && <span>Please enter correct date</span>}
      <Lable>time</Lable>
      <Input type="time" name="time" defaultValue="time" ref={register} />

      <Input name="tripId" type="hidden" value={trip.id} ref={register} />
      <SubmitWrapper>
        <Input type="submit" />
      </SubmitWrapper>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  span {
    color: #000000;
    display: flex;
    justify-content: center;
  }
  h2 {
    color: #000000;
    display: flex;
    justify-content: center;
  }
`
const Input = styled.input`
  color: #000000;
  text-transform: uppercase;
  background: none;
  border: 3px solid #000000;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  margin: 10px;
  width: 300px;
  padding: 10px;
  border-radius: 10px;
`
const Lable = styled.label`
  margin-left: 10px;
  font-weight: bold;
  color: #000000;
`
const SubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    background-color: #f20cc0;
    color: #000000;
    text-decoration: none;
  }
`
