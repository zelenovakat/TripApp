import React from "react"
import styled from "styled-components"
import Title from "../components/Title"
import loginCover from "../images/loginCover.jpg"
import { BrowserRouter as Router, Link } from "react-router-dom"

const Login = () => {
  return (
    <Router>
      <MainWrapper>
        <Title>WORLD ON YOUR HAND</Title>
        <h5>
          Going out of your comfort zone to open yourself up to the experiences and beauty that life
          gives you, no matter what path you choose to go on
        </h5>
        <ButtonWrapper>
          <Button>
            <Link>Sign In</Link>
          </Button>
          <Button>
            <Link>Sign Up</Link>
          </Button>
        </ButtonWrapper>
      </MainWrapper>
    </Router>
  )
}

export default Login

export const MainWrapper = styled.div`
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
    color: #000000;
    h1 {
      font-size: 60px;
      margin-top: 150px;
      margin-left: 30px;
      margin-right: 50px;
    }
  }
`
export const Button = styled.button`
  margin: 15px;
  font-size: 20px;
  background: border-box;
  color: #000000;
  border-radius: 15px;
  -webkit-text-stroke: medium;
  &:hover {
    background-color: #4687a8;
    color: black;
    text-decoration: none;
  }
  link {
    color: #000000;
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
