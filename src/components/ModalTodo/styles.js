import styled from "styled-components";

export const Container = styled.div`
background-color: rgba(0, 0, 0, 0.8);
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
