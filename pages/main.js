import styled from "styled-components";
import RoundButton from "../components/RoundButton";
import LayoutHeader from "../components/LayoutHeader";
import SquareInput from "../components/SquareInput";
import PinkButton from "../components/PinkButton";
import Modal from "../components/Modal";
const Main = () => (
  <>
    <SquareInput label="ID" text="아이디를 입력해주세요"></SquareInput>
    <PinkButton text="전체"></PinkButton>
    <Modal title={"회원가입"}></Modal>
  </>
);

export default Main;
