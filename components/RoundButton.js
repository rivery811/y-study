import styled from "styled-components";
const RoundButton = ({ text, color, size }) => {
  return (
    <RButton color={color} size={size}>
      {text}
    </RButton>
  );
};
export default RoundButton;

const RButton = styled.div`
  background: ${(props) => (props.color ? props.color : "#393535")};
  width: ${(props) => (props.size ? props.size : 217)}px;
  height: 44px;
  border-radius: 22px;
  font: normal normal normal 16px/22px Noto Sans CJK KR;
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  //flext-direction : column;
`;
