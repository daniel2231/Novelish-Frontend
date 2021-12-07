import styled from "styled-components";
import { Card } from "antd";
import Navbar from "../components/Navbar/Navbar";

const MainDiv = styled.div`
  padding: 100px 50px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const { Meta } = Card;

export default function Main() {
  return (
    <>
      <Navbar />

      <MainDiv>
        <h1>Recent Books</h1>
        <CardContainer>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </CardContainer>
      </MainDiv>
    </>
  );
}
