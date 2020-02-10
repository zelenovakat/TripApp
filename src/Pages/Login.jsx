import React from "react"
import styled from "styled-components"
import Title from "../components/Title"
import loginCover from "../images/loginCover.jpg"
import { BrowserRouter as Router, Link } from "react-router-dom"

const Login = () => {
  return (
    <Router>
      <StyledDiv>
        <Title>WORLD ON YOUR HAND</Title>
        <h5>
          Going out of your comfort zone to open yourself up to the experiences and beauty that life
          gives you, no matter what path you choose to go on
        </h5>
        <ButtonWrapper>
          <StyledButton>
            <Link>Sign In</Link>
          </StyledButton>
          <StyledButton>
            <Link>Sign Up</Link>
          </StyledButton>
        </ButtonWrapper>
      </StyledDiv>
    </Router>
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
  h5 {
    margin-left: 30px;
    margin-right: 50px;
  }

  ${Title} {
    color: white;
    h1 {
      font-size: 60px;
      margin-top: 150px;
      margin-left: 30px;
      margin-right: 50px;
    }
  }
`
export const StyledButton = styled.button`
  margin: 15px;
  font-size: 20px;
  background: border-box;
  color: white;
  border-radius: 15px;
  -webkit-text-stroke: medium;
  &:hover {
    background-color: mediumaquamarine;
    color: black;
    text-decoration: none;
  }
  link {
    color: white;
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 50px;
`
