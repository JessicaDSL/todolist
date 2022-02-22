import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: #fff;
  width: 84%;
  margin: 4rem 0 1rem 0;
  font-size: x-large;
  font-weight: 700;
  ${media.between("medium", "large")`
    width: 60%;
  `}
  ${media.greaterThan("large")`
    margin: 0 0 2rem 0;
    width: 50%;
    font-size: xxx-large;
    font-weight: 700;
  `}
`;

export const Link = styled.a`
  color: #fff;
  svg{
    font-size: xx-large;
  }
  display: flex;
  align-items: flex-end;
  font-weight: 500;
  ${media.greaterThan("large")`
  svg{
    font-size: xxx-large;
  }
  `}
`;
