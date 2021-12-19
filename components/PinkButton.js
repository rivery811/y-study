import styled from "styled-components";
const PinkButton = ({ text, color, size }) => {
  return (
    <PButton color={color} size={size}>
      {text}
    </PButton>
  );
};
export default PinkButton;

const PButton = styled.div`
  background: ${(props) => (props.color ? props.color : "#FFBEBE")};
  width: ${(props) => (props.size ? props.size : 91)}px;
  height: 30px;
  border-radius: 15px;
  font: normal normal normal 16px/22px Noto Sans CJK KR;
  color: #1e1e1e;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;
