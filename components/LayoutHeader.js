import styled from "styled-components";
import HeaderImage from "../public/images/header_image.svg";

const LayoutHeader = () => (
  <Container>
    <ImageContainer>
      <HeaderImageContainer />
    </ImageContainer>

    <MenuContainer></MenuContainer>
  </Container>
);
export default LayoutHeader;

const Container = styled.div``;

const ImageContainer = styled.div`
  background: transparent linear-gradient(97deg, #f8e1e8 0%, #fbf3dd 100%) 0% 0%
    no-repeat padding-box;
  width: 100vw;
  height: 15%;
  display: flex;
  justify-content: center;
  img {
    width: 80%;
    height: 100%;
  }
`;
const MenuContainer = styled.div`
  background: #393535;
  height: 43;
`;
const HeaderImageContainer = styled(HeaderImage)`
  width: 60%;
`;
