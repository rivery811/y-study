import styled from "styled-components";
const SquareInput = ({ label, text, size }) => (
  <Container>
    <LabelSpan>{label}</LabelSpan>
    <InputBox placeholder={text} size={size} />
  </Container>
);
export default SquareInput;

const Container = styled.div``;
const LabelSpan = styled.span`
  color: #d2d2d2;
  font-size: 14px;
  font-weight: bold;
  margin-right: 13px;
`;
const InputBox = styled.input`
  width: ${(props) => (props.size ? props.size : 266)}px;
  height: 35px;
  border: 1px solid var(--stroke);
  font-size: 13px;
  text-indent: 11.5px;
`;
