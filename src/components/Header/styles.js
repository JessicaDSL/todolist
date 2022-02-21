import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  width: 96%;
  margin: 0 0 1rem 0;
  p {
    display: flex;
    align-items: center;
    font-weight: 500;
    padding: 0 0.5rem;
  }
  svg {
    font-size: xx-large;
  }
  ${media.between("medium", "large")`
    width: 60%;
  `}
  ${media.greaterThan("large")`
    margin: 0 0 2rem 0;
    width: 50%;
    p{
    font-size: x-large;
  }
  svg {
    font-size: xxx-large;
  }
  `}
`;

export const Title = styled.h1`

`