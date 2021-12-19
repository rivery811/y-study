import styled from "styled-components";
import LoginImage from "../public/images/modalLogin.svg";
import CloseImage from "../public/images/close.svg";
const Modal = ({ title, width, height }) => (
  <Container>
    <ModalContainer wsize={width} hsize={height}>
      <ModalTitle>
        <LoginImage />
        <TitleText>{title}</TitleText>
        <Line />
        <CloseImage />
      </ModalTitle>
    </ModalContainer>
  </Container>
);
export default Modal;

const Container = styled.div`
  background: #000000;
  opacity: 0.5;
  border: 1px solid #707070;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContainer = styled.div`
  width: ${(props) => (props.width ? props.width : 641)}px;
  height: ${(props) => (props.height ? props.height : 638)}px;
  z-index: 2;
  background: #ffffff;
  flex-direction: column;
`;
const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;
const TitleText = styled.div``;
const Line = styled.div`
  background: "#1e1e1e";
  width: 90%;
  height: 1px;
`;
