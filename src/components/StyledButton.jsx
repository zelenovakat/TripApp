import styled from "styled-components"

export const StyledButton = styled.button`
  margin: 15px;
  font-size: 20px;
  border-radius: 10px;
  background-color: #4687a8;
  color: #f8f8f8;
  border: 2px solid #3f7a9b;
  a {
    text-decoration: none;
    color: #f8f8f8;
    display: block;
    padding: 10px 100px;
  }
  &:hover {
    background-color: #3f7a9b;
    color: #ff0606;
    text-decoration: none;
  }
`
export default StyledButton
