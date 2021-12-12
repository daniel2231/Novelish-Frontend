import styled from "styled-components";
import { Card } from "antd";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import posts from "../posts.json";

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
          {Object.entries(posts).map((value, index) => {
            return (
              <Link href={`/books/${value[1].id}`} key={index}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={value[1].imgSrc} />}
                >
                  <Meta
                    title={value[1].title}
                    description={value[1].condition}
                  />
                </Card>
              </Link>
            );
          })}
        </CardContainer>
      </MainDiv>
    </>
  );
}
