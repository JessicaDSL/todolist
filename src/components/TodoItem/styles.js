import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ state }) => (state ? "#fd7294" : "none")};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;
  border-radius: 6px;
  padding: 0.5rem 0.2rem;
  border-bottom: 1px solid #e7e9ec;
  word-wrap: break-word;
  p {
    display: flex;
    flex-grow: 1;
    padding: 0 0 0 0.4rem;
    font-size: medium;
    font-weight: 500;
    color: ${({ state }) => (state ? "#fff" : "#777879")};
  }
  button {
    background: #fd7294;
    border: none;
    border-radius: 6px;
    margin: 0 0 0 0.2rem;
    padding: 0 0.4rem;
    color: #fff;
    height: 2.2rem;
    font-weight: 600;
    cursor: pointer;
  }
  ${media.greaterThan("large")`
  display: flex;
  padding: 1rem;
  p {
    display:flex;
    align-items: center;
    padding: 0 0 0 0.8rem;
    font-size: x-large;
  }
  button {
    margin: 0 0 0 0.2rem;
    padding: 0 2rem;
    height: 3rem;
    font-size: large;
  }
  `}
`;

export const TaskStatus = styled.label`
  display: flex;
  align-items: center;
  input {
    all: unset;
    border: 1px solid #777879;
    width: 1rem;
    height: 1rem;
    background: #fff;
    border-radius: 3px;
    display: inline-block;
    &:checked {
      width: 1rem;
      height: 1rem;
      background: #63c132;
    }
  }
  ${media.greaterThan("large")`
  input {
    width: 1.4rem;
    height: 1.4rem;
    &:checked {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
  `}
`;

export const Span = styled.span`
  display: ${({ hasDescription }) => (hasDescription ? "flex" : "none")};
  align-items: center;
  margin: 0 0 0 0.5rem;
  svg {
    font-size: x-large;
    color: #80e748;
  }
  ${media.greaterThan("large")`
  margin: 0 0 0 1rem;
  svg {
    font-size: xx-large;
  }
  `}
`;

export const ButtonModal = styled.div`
  background: #fe4370;
  border-radius: 4px;
  height: 2.2rem;
  color: #fff;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.greaterThan("large")`
  background: #fe4370;
  border-radius: 4px;
  height: 2.2rem;
  color: #fff;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  `}
`;

export const EditTask = styled.div`
  display: ${({state}) => state ? 'flex' : 'none'};
  width: 100%;
  justify-content: space-between;
`

export const MainTask = styled.div`
  display: flex;
  width: 100%;
`

export const ModalOverlay = styled.div`
background-color: rgba(0, 0, 0, 0.342);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    display: ${({open}) => open ? 'flex' : 'none'};
`

export const ModalHeader = styled.div`
background-color: rgba(0, 0, 0, 0.041);
    padding: 1rem;
`

export const ModalContent = styled.div`
padding: 0.5rem 1rem;
    flex: 1;
`

export const ModalFooter = styled.div`
padding: 1rem;
    background-color: rgba(0, 0, 0, 0.041);
`

export const Modal = styled.div`
display: ${({open}) => open ? 'flex' : 'none'};
margin: 1rem;
    width: 100%;
    max-width: 600px;
    height: auto;
    min-height: 500px;
    background-color: white;
    border-radius: 11px;
    flex-direction: column;
    overflow: hidden;
`