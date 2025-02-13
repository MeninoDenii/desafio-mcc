import {
  Container,
  ContentRight,
  LeftSide,
  Redirect,
  RightSide,
  Subtitle,
  Title,
  BannerImage,
  Titles,
  Form,
  StyledLink,
} from "./StyledLoginPage";
import Banner from "../../assets/banner.svg";
import { Button, Input } from "../../components";

const LoginPage = () => {
  return (
    <Container>
      <LeftSide>
        <BannerImage src={Banner} alt="Banner" />
      </LeftSide>
      <RightSide>
        <ContentRight>
          <Titles>
            <Subtitle>Bem-vindo de volta</Subtitle>
            <Title>Faça login na sua conta</Title>
          </Titles>
          <Form>
            <Input
              label="E-mail"
              type="email"
              required
              placeholder="exemplo@gmail.com"
            />
            <Input
              label="Senha"
              type="password"
              required
              placeholder="Digite sua senha"
            />

            <Button type="submit">Entrar na conta</Button>
          </Form>

          <Redirect>
            Não tem uma conta?{" "}
            <StyledLink to="/register">Cadastre-se</StyledLink>
          </Redirect>
        </ContentRight>
      </RightSide>
    </Container>
  );
};

export default LoginPage;
