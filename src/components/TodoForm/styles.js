import styled from "styled-components";

export const Form = styled.form`
  border-radius: 4px;
  width: 280px;
  min-height: 220px;
  font-weight: 700;
  font-size: large;
  z-index: 10;
  border-radius: 16px;
  padding: 0 0.8rem;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  color: #303030;
  display: flex;
  flex-direction: column;
  textarea {
    font-size: medium;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 500;
    color: #777879;
    overflow-y: scroll;
    border-radius: 4px;
    border: 1px solid #c8cacc;
  }
`;

export const Title = styled.textarea`
  padding: 0.5rem;
  margin: 0.4rem 0 1rem 0;
`;

export const DescriptionTask = styled.textarea`
  margin: 0.4rem 0;
  padding: 0.4rem;
  min-height: 8rem;
  max-height: 10rem;
`;

export const BtnsStatusTask = styled.div`
  width: 100%;
  //background: blue;
  display: flex;
  button {
    flex-grow: 1;
    height: 2.2rem;
    border-radius: 6px;
    margin: 0.8rem 0.2rem 1.1rem;
    color: #fff;
    font-weight: 600;
    border: none;
    &::disable{
      background: red;
    }
  }
`;

export const ButtonSave = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 1rem 0;
  button {
    background: #fe4370;
    border-radius: 6px;
    border: none;
    padding: 1rem 1.5rem;
    color: #fff;
    font-size: smaller;
  }
`;


export const DoButton = styled.button`
background: ${({doStatus}) => doStatus ? "#ff6d54" : 'gray'};
`

export const DoingButton = styled.button`
  background: ${({doingStatus}) => doingStatus ? "#00c2ea" : 'gray'};
`

export const DoneButton = styled.button`
background: ${({doneStatus}) => doneStatus ? "#00de3d" : 'gray'};
`