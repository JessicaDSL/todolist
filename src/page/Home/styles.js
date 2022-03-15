import styled from "styled-components";
import media from "styled-media-query";

export const Background = styled.div`
  margin: 10% 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: #f6f6f6;
  width: 88%;
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    border-radius: 0 0 8px 8px;
    width: 96%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a3a0a2;
    font-size: smaller;
    font-weight: 400;
    padding: 1.1rem 0;
    svg {
      margin: 0 0 0 0.1rem;
    }
  }
  ${media.between("medium", "large")`
    width: 60%;
    font-size: x-large;
    padding: 1.2rem 0;
  `}
  ${media.greaterThan("large")`
  width: 50%;
  font-size: x-large;
    padding: 1.2rem 0;
  `}
`;
