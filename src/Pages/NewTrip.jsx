import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { useTrips } from "../stores/TripStore"
import { useHistory } from "react-router-dom"
import { getNewId } from "../components/GetNewId"
import Title from "../components/Title"
import StyledButton from "../components/StyledButton"

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
      <Title>Create A New Trip</Title>

      <StyledLable>Name</StyledLable>
      <Input name="title" defaultValue="" ref={register({ required: true })} />
      {errors.title && <span>Please enter your name trip</span>}

      <StyledLable>Number of people</StyledLable>
      <Input name="numberOfPeople" defaultValue="" ref={register({ required: true })} />
      {errors.numberOfPeople && <span>Please enter number of people</span>}

      <StyledLable>From</StyledLable>
      <Input type="date" name="from" defaultValue="from" ref={register} />
      <StyledLable>To</StyledLable>
      <Input type="date" name="to" defaultValue="to" ref={register} />

      <Input name="id" type="hidden" value={getNewId()} ref={register} />
      <ButtonWrapper>
        <StyledButtonWrapper type="submit">Add Trip</StyledButtonWrapper>
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
  h2 {
    display: flex;
    justify-content: center;
  }
  span {
    color: #4687a8;
    display: flex;
    justify-content: center;
  }
`
const Input = styled.input`
  text-transform: uppercase;
  background: #f8f8f8;
  border: 2px solid #e5e5e5;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;

  outline: none;

  &:focus {
    border: 2px solid #4687a8;
  }
`
const StyledLable = styled.label`
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
