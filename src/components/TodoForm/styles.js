import styled from "styled-components";

export const Form = styled.form`
  border-radius: 4px;
  width: 310px;
  min-height: 220px;
 // background: red;
  font-weight: 700;
  font-size: large;
  z-index: 10;
  border-radius: 16px;
  padding: 0 .8rem;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  color: #303030;
`;

export const Title = styled.div`
  display: flex;
  min-height: 2rem;
  max-height: 4rem;
  display: flex;
  align-items: center;
  overflow-y: scroll;
  border: 1px solid #c8cacc;
  border-radius: 4px;
  width: 82%;
  padding: 0 0 0 0.4rem;
  margin: .4rem 0 1.5rem 0;
  font-size: medium;
  font-weight: 500;
  color: #777879;
`;

export const DescriptionTask = styled.div`
  margin: 0.4rem 0;
  padding: 0.4rem;
  border: 1px solid #c8cacc;
  border-radius: 4px;
  min-height: 8rem;
  max-height: 10rem;
  overflow-y: scroll;
  font-weight: 500;
`;

export const Btns = styled.div`
width: 100%;
//background: blue;
display: flex;
  button {
    flex-grow: 1; 
    height: 2.2rem;
    border-radius: 6px;
    margin: 1rem .2rem 1.1rem;
    color: #fff;
    font-weight: 600;
    border: none;
  }
`
