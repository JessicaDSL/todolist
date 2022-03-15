import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  padding: 0.5rem 1rem;
  background: #fff;
  width: 88%;
  margin: 0 0 8rem 0;
  border-radius: 0 0 8px 8px;
  ${media.between("medium", "large")`
    width: 60%;
  `}
  ${media.greaterThan("large")`
  width: 50%;
  padding: 2rem;
  `}
`;
