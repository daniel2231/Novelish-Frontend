import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import { Image } from "antd";

const PBookDiv = styled.div`
  display: flex;
  background-color: #f3f3f1;
  height: 100vh;
  width: 100%;
`;

const Header = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  background-color: #0f0f0f;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: #0f0f0f;
  border-radius: 25px;
`;

const StyledImage = styled(Image)`
  width: 300px;
  height: 300px;
  object-fit: contain;
`;

const StyledH1 = styled.h3`
color: white;
  font-size: 4rem;
  font-weight: 400;
  line-height: 1.2;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function PBook() {
  return (
    <>
      <Navbar></Navbar>
      <PBookDiv>
        <Header>
          <ImageContainer>
            <StyledImage src="https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg" />
          </ImageContainer>
          <TitleContainer>
            <StyledH1>Design Formula</StyledH1>
            <p>Author: Anita Nipane</p>
            <p>Publisher: Anita Nipane</p>
          </TitleContainer>
        </Header>
      </PBookDiv>
    </>
  );
}
