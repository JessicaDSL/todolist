import styled from "styled-components";

export const Container = styled.div`
  display: flex;
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
    width: 50%;
    padding: 0 0 0 0.4rem;
    font-size: 5vw;
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
`;

export const TaskStatus = styled.label`
  font-size: small;
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
  span {
  }
`;

export const Span = styled.span`
  display: ${({ hasDescription }) => (hasDescription ? "flex" : "none")};
  svg {
    font-size: medium;
    color: #80e748;
  }
`;

export const Button = styled.div`
  background: #fe4370;
  border-radius: 4px;
  height: 2.2rem;
  color: #fff;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
