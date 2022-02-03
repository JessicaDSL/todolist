import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  background-color: #fff;
  padding: 1rem;
  width: 96%;
  border-radius: 0 0 8px 8px;
  ${media.between("medium", "large")`
    width: 60%;
  `}
  ${media.greaterThan("large")`
  width: 50%;
  padding: 2rem;
  `}
`;
