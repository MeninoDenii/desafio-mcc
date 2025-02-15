import { Container, Logout, Logo, TypingSpan } from "./StyledHeader";
import { LogOutIcon } from "lucide-react";
import Banner from "../../assets/banner.svg";

interface HeaderProps {
  userName?: string;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ userName, onLogout }) => {
  return (
    <Container>
      <Logo>
        <img src={Banner} alt="Banner" width={60} height={60} />
        <TypingSpan>{`Bem-vindo, ${userName}`}</TypingSpan>
      </Logo>
      <Logout onClick={onLogout}>
        <span>Sair</span>
        <LogOutIcon />
      </Logout>
    </Container>
  );
};

export default Header;
