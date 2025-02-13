import { Button, Input } from "../../components";
import {
  Container,
  Content,
  Title,
  Form,
  Footer,
  StyledLink,
} from "./StyledRegisterPage";

const RegisterPage = () => {
  return (
    <Container>
      <Content>
        <Title>Cadastre-se na plataforma!</Title>
        <Form>
          <Input
            placeholder="Digite seu nome"
            label="Nome"
            required
            autoFocus
          />
          <Input
            placeholder="Digite seu melhor e-mail"
            label="E-mail"
            required
          />

          <Input
            placeholder="Digite sua senha"
            label="Senha"
            type="password"
            required
          />
          <Input
            placeholder="Confirme sua senha"
            label="Confirmação de senha"
            type="password"
            required
          />
          <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
        </Form>
        <Footer>
          <Button type="submit">Cadastrar</Button>
        </Footer>
      </Content>
    </Container>
  );
};

export default RegisterPage;
