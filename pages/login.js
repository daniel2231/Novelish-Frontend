import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";

const LoginDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #0f0f0f;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeaderH1 = styled.h1`
  text-align: center;
  color: white;
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledP = styled.p`
  color: white;
  font-size: 2rem;
  margin: 0;
  font-style: italic;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const StyledForm = styled.form`
  position: relative;
  width: 500px;
  margin: 10px 0 40px 0;
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const StyledInput = styled.input`
  font-size: 0.875em;
  width: 100%;
  height: 50px;
  padding: 0px 15px 0px 15px;

  background: transparent;
  outline: none;
  color: white;

  border: solid 1px #b3aca7;
  border-bottom: none;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  &:hover {
    background: #f3f3f1;
    color: black;
  }
  &#submit {
    border-bottom: solid 1px #b3aca7;
    :hover {
      cursor: pointer;
    }
  }
`;

const StyledLink = styled.a`
  color: white;
  border-bottom: 1px solid white;
  &:hover {
    border-bottom: 1px solid #0091ff;
  }
`;

const BackLinkDiv = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
`;

const StyledBackLink = styled.a`
  color: white;
  font-size: 1rem;
`;

export default function Login() {
  const [login, setLogin] = useState(true);
  return (
    <>
      <BackLinkDiv>
        <StyledBackLink href="/"><ArrowLeftOutlined /> Go Back</StyledBackLink>
      </BackLinkDiv>

      <LoginDiv>
        <HeaderH1>
          Are you ready to
          <br />
          join us?
        </HeaderH1>
        {login ? (
          <StyledP>Welcome back!</StyledP>
        ) : (
          <StyledP>Nice to see you!</StyledP>
        )}
        <div>
          <StyledForm>
            <StyledInput type="email" placeholder="E-Mail" />
            <StyledInput type="password" placeholder="PASSWORD" />
            {login ? (
              <></>
            ) : (
              <StyledInput type="password" placeholder="RETYPE-PASSWORD" />
            )}
            <StyledInput id="submit" type="submit" value="GO!" />
          </StyledForm>
        </div>
        {login ? (
          <StyledLink onClick={() => setLogin(false)}>New user?</StyledLink>
        ) : (
          <StyledLink onClick={() => setLogin(true)}>Existing user?</StyledLink>
        )}
        <br />
      </LoginDiv>
    </>
  );
}
