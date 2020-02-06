import React from "react"
import styled from "styled-components"
import Title from "../components/Title"
import loginCover from "../images/loginCover.jpg"

const Login = () => {
  const handleClick = () => {
    console.log("ffff")
  }

  return (
    <StyledDiv>
      <Title>WORLD ON YOUR HAND</Title>
      <ButtonWrapper>
        <StyledButton onClick={handleClick}>Sign In</StyledButton>
        <StyledButton>Sign Up</StyledButton>
      </ButtonWrapper>
    </StyledDiv>
  )
}

export default Login

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${loginCover});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;

  ${Title} {
    color: white;
  }
`
export const StyledButton = styled.button`
  background: white;
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
