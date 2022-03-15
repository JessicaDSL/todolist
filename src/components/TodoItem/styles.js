import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0rem 0;
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
  padding: 0rem 0;
  margin: .7rem 0 .9rem 0;
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
  margin: 0 0 0rem 0;
  font-weight: 600;
  svg {
    font-size: x-large;
  }
  ${media.greaterThan("large")`
    height: 3rem;
    font-size: large;
  `}
`;

export const TitleTask = styled.textarea`
  display: flex;
  max-height: 200px;
  margin: .8rem 0 0 0;
  overflow-y: auto;
  justify-content: flex-start;
  align-items: center;
  word-wrap: break-word;
  flex-wrap: wrap;
  color: #fe4370;
  font-weight: 500;
  font-size: medium;
  border: none;
  font-family: "Montserrat Alternates", sans-serif;
`;

