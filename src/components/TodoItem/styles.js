import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.8rem 0;
  padding: 0 0 1rem 0;
  border-bottom: 1px solid #cecece;
  &:last-child {
    border: none;
  }
  ${media.greaterThan("large")`
  padding: 1rem;
  `}
`;

export const DescriptionTask = styled.div`
  display: ${({ openDescriptionBox }) =>
    openDescriptionBox ? "flex" : "none"};
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 0;
  div{
    display: flex;
  }
  span {
    font-size: small;
  }
  button {
    background: #fd7294;
    border: none;
    border-radius: 4px;
    color: #fff;
    padding: .5rem .5rem;
    margin: 0 0 0 .2rem;
  }
`;

export const Task = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
`;

export const Button = styled.button`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #fd7294;
  height: 3rem;
  padding: 1rem 0;
  font-weight: 600;
  ${media.greaterThan("large")`
    height: 3rem;
    font-size: large;
  `}
`;

export const CheckStatus = styled.div`
  display: flex;
  max-height: 200px;
  overflow-y: auto;
  max-width: 85%;
  justify-content: flex-start;
  align-items: center;
  word-wrap: break-word;
  flex-wrap: wrap;
  color: #fc72b2;
  font-weight: 600;
  font-size: medium;
`;

export const BtnCheck = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  button {
    font-size: x-small;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    color: #fd7294;
    svg {
      font-size: medium;
    }
  }
`;
