import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { useTrips } from "../stores/TripStore"
import { useHistory } from "react-router-dom"
import newTripForm2 from "../images/newTripForm2.jpeg"

export default function NewTrip() {
  const { register, handleSubmit, errors } = useForm()
  const { createTrip } = useTrips()
  const history = useHistory()

  const onSubmit = data => {
    createTrip(data)
    history.push("/trips")
  }
  const getNewId = () => {
    return Math.random()
      .toString(36)
      .substr(2, 9)
  }

  console.log("errors", errors)
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <StyleLabel>name</StyleLabel>
      <StyleInput name="title" defaultValue="" ref={register({ required: true })} />
      {errors.name && <span>Please enter your name trip</span>}

      <StyleLabel>numberOfpeople</StyleLabel>
      <StyleInput name="numberOfPeople" defaultValue="" ref={register({ required: true })} />
      {errors.numberOfPeople && <span>Please enter number of people</span>}

      <StyleLabel>to</StyleLabel>
      <StyleInput type="date" name="to" defaultValue="to" ref={register} />
      <StyleLabel>from</StyleLabel>
      <StyleInput type="date" name="from" defaultValue="from" ref={register} />

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
  background-image: url(${newTripForm2});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
`
const StyleInput = styled.input`
  color: white;
  text-transform: uppercase;
  background: none;
  border: 3px solid white;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
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
  font-family: "Playfair Display SC", serif;
  font-weight: bold;
  color: white;
`
