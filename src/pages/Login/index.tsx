import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidator } from "../../validations/login/LoginValidator";
import { useAuthStore } from "../../store/store";
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(loginValidator),
    values: { email: "", password: "" },
    mode: "onChange",
  });

  const { login, success } = useAuthStore();

  const onSubmit = handleSubmit((data) => {
    login(data?.email, data?.password);

    if (!success) return;

    reset();
  });

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
              {...register("email")}
              label="E-mail"
              type="email"
              required
              placeholder="exemplo@gmail.com"
              autoFocus
              error={Boolean(errors?.email)}
              message={errors?.email ? errors?.email?.message : ""}
            />
            <Input
              {...register("password")}
              label="Senha"
              type="password"
              required
              placeholder="Digite sua senha"
              error={Boolean(errors?.password)}
              message={errors?.password ? errors?.password?.message : ""}
            />

            <Button type="button" onClick={onSubmit} disabled={!isValid}>
              Entrar na conta
            </Button>
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
