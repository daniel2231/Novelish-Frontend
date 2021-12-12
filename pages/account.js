import styled from "styled-components";
import { Card, Select, Button } from "antd";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import books from '../posts.json'
import user from "../users.json"

const MainDiv = styled.div`
  padding: 100px 50px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const { Meta } = Card;

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

let filtered = books.filter(it => it.ownerID==1);
export default function Account() {
  return (
    <>
      <Navbar />

      <MainDiv>
        <h1>My books</h1>
        <CardContainer>
          {Object.entries(filtered).map((value, index) => {
            return (
              <div key={index}>
                <Link href={`/books/${value[1].id}`}>
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
                <Select
                  //todo: change default value
                  defaultValue="sale"
                  style={{ width: 120, marginTop: 10 }}
                  onChange={handleChange}
                >
                  <Option value="sale">For Sale</Option>
                  <Option value="reserved">Reserved</Option>
                </Select>
                <Button style={{ marginLeft: 10 }} danger>
                  Delete
                </Button>
              </div>
            );
          })}
        </CardContainer>
      </MainDiv>
    </>
  );
}
