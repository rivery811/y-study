import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
const BasicBoard = () => {
  const [contents, setContents] = useState([]);
  // setContents
  const getPost = async () => {
    let boardList = await axios.get("http://localhost:3060/post");
    console.log(`boardList: ${boardList}`);
    setContents(boardList.data);
  };
  useEffect(() => {
    getPost();
  }, []);

  console.log(contents);
  return (
    <Container>
      <TitleContainer>
        <Category>구분</Category>
        <TextTitle>글제목</TextTitle>
        <IconContainer>작성일</IconContainer>
        <IconContainer>좋아요 </IconContainer>
      </TitleContainer>
      <ContentsContainer>
        {contents
          ? contents.map((item, index) => (
              <div key={index + item.date}>
                <CategoryContent>{item.category}</CategoryContent>
                <TitleContent>
                  {item.title}
                  <span>[{item.comment_count}]</span>
                </TitleContent>
                <IConContent>{item.date}</IConContent>
                <IConContent>{item.like}</IConContent>
              </div>
            ))
          : "내용이 없습니다."}
      </ContentsContainer>
    </Container>
  );
};

export default BasicBoard;

const Container = styled.div`
  width: 100%;
  font-size: 13px;
  color: #1e1e1e;
`;
const TitleContainer = styled.div`
  border-bottom: 1px solid #1e1e1e;
  height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Category = styled.div`
  width: 150px;
`;
const TextTitle = styled.div`
  width: 100%;
`;
const IconContainer = styled.div`
  width: 150px;
`;
const CategoryContent = styled.div`
  width: 150px;
`;
const TitleContent = styled.div`
  width: 100%;
  padding-left: 30px;
  span {
    color: #ff4343;
    font-size: 13px;
    margin-left: 5px;
  }
`;
const IConContent = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
`;
const ContentsContainer = styled.div`
  div {
    display: flex;
  }
`;
