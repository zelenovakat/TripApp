import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

const RemoveModal = ({ isShowing, hide, handleRemoveTrip, closeRemoveTripModal }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalOverlay />
          <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
            <Modal>
              <MainWrapper>
                <ModalHeader>
                  <ModalCloseButton
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={hide}>
                    <span aria-hidden="true">&times;</span>
                  </ModalCloseButton>
                </ModalHeader>
                <p>Do you want to delete a trip?</p>
                <ButtonWrapper>
                  <Button onClick={handleRemoveTrip}>Yes</Button>
                  <Button onClick={closeRemoveTripModal}>No</Button>
                </ButtonWrapper>
              </MainWrapper>
            </Modal>
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null

export default RemoveModal
const Button = styled.button`
  font-size: 20px;
  padding: 1px 69px;
  &:hover {
    background-color: #49afbb;
  }
`
const MainWrapper = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
  }
`
const ButtonWrapper = styled.div``

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

const Modal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`

const ModalCloseButton = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: 0.3;
  cursor: pointer;
  border: none;
`
