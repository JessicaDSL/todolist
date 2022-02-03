import styled from "styled-components";
import media from "styled-media-query";

export const Form = styled.form`
  background: #fff;
  width: 96%;
  padding: 1rem;
  z-index: 1;
  display: flex;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid #dadde3;
  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.04);
  -webkit-box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.04);
  input {
    height: 2rem;
    width: 80%;
    border-radius: 6px 0 0 6px;
    border: 1px solid #c1c0c0;
    padding: 0 0 0 0.8rem;
    color: #fe4370;
    font-family: "Montserrat Alternates", sans-serif;
    &::placeholder {
      color: #fd7294;
      font-size: small;
      font-family: "Montserrat Alternates", sans-serif;
    }
  }
  button {
    height: 2rem;
    width: 20%;
    border-radius: 0 6px 6px 0;
    border: 1px solid #fe4370;
    border-left: none;
    background: #fe4370;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
  ${media.between("medium", "large")`
    width: 60%;
  `}
  ${media.greaterThan("large")`
  width: 50%;
  padding: 1.5rem;
  input {
    height: 3rem;
    font-size: large;
    &::placeholder {
      font-size: large;
    }
  }
  button {
    height: 3rem;
    width: 20%;
    font-size: large;
    border-radius: 0 6px 6px 0;
    border: 1px solid #fe4370;
    border-left: none;
    background: #fe4370;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
  `}
`;
