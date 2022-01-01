import styled from "styled-components";
import WriteImg from "/public/images/write_image.svg";
import Smile from "/public/images/smile.svg";
import Pencil from "/public/images/pencil.svg";
import Close from "/public/images/white_close.svg";
const BoardWrite = () => {
  return (
    <Container>
      <TitleContainer>
        <TitleText>글쓰기</TitleText>
        <WriteImg />
      </TitleContainer>

      <ContentsContainer>
        <InputTitle placeholder="제목을 입력해주세요."></InputTitle>
        <SelecetWrap>
          <SelecetBox>
            <option value="humor">유머</option>
          </SelecetBox>
          <div>
            <Smile />
            스티커
          </div>
        </SelecetWrap>
        <TextAreaContents placeholder="내용을 입력해주세요."></TextAreaContents>
        <ButtonWrap>
          <Button color="#637887">
            <div>
              <Close />
              취소
            </div>
          </Button>
          <Button>
            <div>
              <Pencil />
              등록
            </div>
          </Button>
        </ButtonWrap>
      </ContentsContainer>
    </Container>
  );
};
export default BoardWrite;

const Container = styled.div`
  width: 100%;
  /* padding-top: 40px;
  padding-left: 50px; */
`;

const TitleContainer = styled.div`
  border-bottom: 1px solid #ebecf1;
  width: 100%;
  height: 77px;
  padding-right: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ContentsContainer = styled.div`
  padding-left: 21px;
  padding-right: 21px;
`;

//페이지 타이틀 형식이 동일하다면 컴포넌트화 고려
const TitleText = styled.div`
  font: normal normal medium 20px/28px Noto Sans CJK KR;
  color: #1e1e1e;
`;

const InputTitle = styled.input`
  width: 100%;
  height: 35px;
  margin-top: 23px;
  margin-bottom: 10px;
`;

const SelecetWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  div {
    display: flex;
    align-items: center;
    font: normal normal normal 14px/19px Noto Sans CJK KR;
  }
`;

const SelecetBox = styled.select`
  width: 230px;
  height: 35px;
  border: 1px solid #d2d2d2;
`;

const TextAreaContents = styled.textarea`
  width: 100%;
  height: 433px;
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

// dartbuttom component  확인 후 이동
// 1 : button border가 잡히는것같음
// 2 : 이미지와  텍스트 정렬  : 텍스트 길이 가변적일때 고려해서 스타일 지정해야함(수정필요)

const Button = styled.button`
  margin-left: 10px;
  background-color: ${(props) => (props.color ? props.color : "#393535")};
  width: 110px;
  height: 35px;
  border-radius: 18px;
  border-color: ${(props) => (props.color ? props.color : "#393535")};

  div {
    align-items: center;
    font: normal normal normal 13px/18px Noto Sans CJK KR;
    color: #ffffff;
    display: inline-block;
    text-align: center;
  }
`;
