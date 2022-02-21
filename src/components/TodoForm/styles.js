import styled from "styled-components";

export const Form = styled.form`
  border-radius: 4px;
  width: 250px;
  height: 170px;
  background: white;
  color: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  h4 {
    color: #303030;
  }
`;

export const Title = styled.div`
  display: flex;
  p {
    max-height: 4rem;
    display: flex;
    align-items: center;
    overflow-y: scroll;
    border: 1px solid #c8cacc;
    border-radius: 4px 0px 0 4px;
    width: 82%;
    padding: 0 0 0 0.4rem;
    font-size: medium;
    font-weight: 500;
    color: #777879;
  }
  button {
    border-radius: ${({ state }) => (state ? "0px 4px 4px 0" : "none")};
    border: 1px solid #fd7294;
    background: #fd7294;
    color: #fff;
    padding: 0 0.6rem;
    height: 2rem;
  }
`;

export const DescriptionTask = styled.div`
  margin: 0.8rem 0;
  p {
    padding: 0.1rem;
    border: 1px solid #c8cacc;
    border-radius: 4px;
    min-height: 4rem;
    max-height: 7rem;
    overflow-y: scroll;
  }
`;
