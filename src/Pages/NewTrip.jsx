import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { useTrips } from "../stores/TripStore"
import { useHistory } from "react-router-dom"
import { getNewId } from "../components/GetNewId"

export default function NewTrip() {
  const { register, handleSubmit, errors } = useForm()
  const { createTrip } = useTrips()
  const history = useHistory()

  const onSubmit = (data) => {
    createTrip(data)
    history.push("/trips")
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Lable>name</Lable>
      <Input name="title" defaultValue="" ref={register({ required: true })} />
      {errors.title && <span>Please enter your name trip</span>}

      <Lable>number of people</Lable>
      <Input name="numberOfPeople" defaultValue="" ref={register({ required: true })} />
      {errors.numberOfPeople && <span>Please enter number of people</span>}

      <Lable>from</Lable>
      <Input type="date" name="from" defaultValue="from" ref={register} />
      <Lable>to</Lable>
      <Input type="date" name="to" defaultValue="to" ref={register} />

      <Input name="id" type="hidden" value={getNewId()} ref={register} />
      <InputWrapper>
        <Input type="submit" />
      </InputWrapper>
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
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    background-color: mediumaquamarine;
    color: black;
    text-decoration: none;
  }
`
const Lable = styled.label`
  margin-left: 10px;
  font-weight: bold;
  color: #000000;
`
