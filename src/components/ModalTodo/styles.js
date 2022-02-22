import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const Content = styled.div`
  position: fixed;
  background: #fff;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  color: red;
  button {
    background: none;
    border: none;
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
