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

  const onSubmit = data => {
    createTrip(data)
    history.push("/trips")
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <StyleLabel>name</StyleLabel>
      <StyleInput name="title" defaultValue="" ref={register({ required: true })} />
      {errors.title && <span>Please enter your name trip</span>}

      <StyleLabel>number of people</StyleLabel>
      <StyleInput name="numberOfPeople" defaultValue="" ref={register({ required: true })} />
      {errors.numberOfPeople && <span>Please enter number of people</span>}

      <StyleLabel>from</StyleLabel>
      <StyleInput type="date" name="from" defaultValue="from" ref={register} />
      <StyleLabel>to</StyleLabel>
      <StyleInput type="date" name="to" defaultValue="to" ref={register} />

      <StyleInput name="id" type="hidden" value={getNewId()} ref={register} />
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

  span {
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
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    background-color: mediumaquamarine;
    color: black;
    text-decoration: none;
  }
`
const StyleLabel = styled.label`
  margin-left: 10px;
  font-weight: bold;
  color: white;
`
