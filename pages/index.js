import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Divider } from "antd";

const FirstContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const SecondContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f1;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Header = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: #0f0f0f;
  justify-content: center;
  align-items: center;
`;

const HeaderH1 = styled.h1`
  color: white;
  font-size: 5rem;
  font-weight: bold;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const StyledH1 = styled.h3`
  color: black;
  font-size: 5rem;
  font-weight: 300;
  line-height: 1.2;
`;

const StyledH3 = styled.h3`
  color: black;
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FirstDiv = styled.div`
  padding-right: 300px;
  @media (max-width: 768px) {
    padding-right: 0px;
  }
`;

const ImageDiv = styled.div`
  position: relative;
  width: 300px;
  height: 600px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledP = styled.p`
  color: black;
  font-size: 1rem;
`;

const StyledLink = styled.a`
  color: black;
  border-bottom: 1px solid black;
  &:hover {
    border-bottom: 1px solid #0091ff;
  }
`;

const InnerDiv = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar page="main" />
      <Header>
        <HeaderH1>
          We sell
          <br />
          your used books
          <br />
          for a low price
        </HeaderH1>
      </Header>
      <FirstContainer>
        <FirstDiv>
          <StyledH1>Easy</StyledH1>
          <StyledH1>Fast</StyledH1>
          <StyledH1>Free</StyledH1>
          <StyledP>
            We provide an Easy, Fast, and Free way <br />
            of selling your unused books
          </StyledP>
          <StyledLink href="/login">
            Try out for free
            <ArrowRightOutlined style={{ paddingLeft: "10px" }} />
          </StyledLink>
        </FirstDiv>

        <ImageDiv>
          <Image
            src="https://images.unsplash.com/photo-1567564586042-9173335de5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt="books"
            layout="fill"
            objectFit="cover"
          />
        </ImageDiv>
      </FirstContainer>
      <SecondContainer>
        <div>
          <StyledH3>
            Let's Create
            <br />
            Progress Together
          </StyledH3>
          <StyledP style={{ marginBottom: "60px" }}>
            We are a team of developers who love to create progress. At Novelish{" "}
            <br />
            we share a mindset of building products that dictates our
            companyculture and hiring criteria.
          </StyledP>
          <InnerDiv>
            <div>
              <StyledP style={{ margin: 0 }}>Hungry for new knowledge</StyledP>
              <Divider />
              <StyledP style={{ margin: 0 }}>
                Strive in a dynamic environment
              </StyledP>
              <Divider />
              <StyledP style={{ margin: 0 }}>Not afraid of the unknown</StyledP>
              <Divider />
            </div>
            <div>
              <StyledP style={{ margin: 0 }}>
                Wish to make a true impact
              </StyledP>
              <Divider />
              <StyledP style={{ margin: 0 }}>
                Always questioning how to do better
              </StyledP>
              <Divider />
              <StyledP style={{ margin: 0 }}>Value relationships</StyledP>
              <Divider />
            </div>
          </InnerDiv>
        </div>
      </SecondContainer>
    </>
  );
}
