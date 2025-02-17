import { Container, Logo, Title } from "./StyledFooter";
import Banner from "../../assets/banner.svg";

const Footer = () => {
  return (
    <Container>
      <Logo>
        <img src={Banner} alt="Banner" width={60} height={60} />
      </Logo>
      <Title to="https://profile-denilson-pedro.netlify.app/" target="_blank">
        Desenvolvidor por: Denilson Pedro
      </Title>
      <div />
    </Container>
  );
};

export default Footer;
