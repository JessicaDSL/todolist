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
  background: #fff;
  width: 96%;
  border-radius: 0 0 8px 8px;
  h4 {
    border-radius: 0 0 8px 8px;
    padding: 0 1rem;
    background: #fcfbfb;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a3a0a2;
    font-size: medium;
    font-weight: 400;
    padding: 1.1rem 0;
    svg {
      margin: 0 0 0 0.1rem;
    }
  }
  ${media.between("medium", "large")`
    width: 60%;
  `}
  ${media.greaterThan("large")`
  width: 50%;
  h4 {
    font-size: large;
    padding: 2rem 0;
  }
  `}
`;
