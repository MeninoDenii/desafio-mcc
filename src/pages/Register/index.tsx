import { Button, Input } from "../../components";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidator } from "../../validations/register/RegisterValidator";
import { useAuthStore } from "../../store/store";
import { v4 as uuidv4 } from "uuid";

import {
  Container,
  Content,
  Title,
  Form,
  Footer,
  StyledLink,
} from "./StyledRegisterPage";
import { toast, ToastContainer } from "react-toastify";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(registerValidator),
    values: { email: "", password: "", confirmPassword: "", name: "" },
    mode: "onChange",
  });

  const { register: registerUser, users } = useAuthStore();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    const userExists = users.some((item) => item?.email === data?.email);

    if (userExists) {
      toast.error("Email já cadastrado na plataforma");
    } else {
      registerUser({
        email: data?.email,
        name: data?.name,
        password: data?.password,
        id: uuidv4(),
      });
      navigate("/");
      reset();
    }
  });

  return (
    <Container>
      <ToastContainer />
      <Content>
        <Title>Cadastre-se na plataforma!</Title>
        <Form>
          <Input
            {...register("name")}
            placeholder="Digite seu nome"
            label="Nome"
            required
            autoFocus
            error={Boolean(errors?.name)}
            message={errors?.name ? errors?.name?.message : ""}
          />
          <Input
            {...register("email")}
            placeholder="Digite seu melhor e-mail"
            label="E-mail"
            required
            error={Boolean(errors?.email)}
            message={errors?.email ? errors?.email?.message : ""}
          />

          <Input
            {...register("password")}
            placeholder="Digite sua senha"
            label="Senha"
            type="password"
            error={Boolean(errors?.password)}
            message={errors?.password ? errors?.password?.message : ""}
            required
          />
          <Input
            {...register("confirmPassword")}
            placeholder="Confirme sua senha"
            label="Confirmação de senha"
            type="password"
            error={Boolean(errors?.confirmPassword)}
            message={
              errors?.confirmPassword ? errors?.confirmPassword?.message : ""
            }
            required
          />
          <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
        </Form>
        <Footer>
          <Button type="button" onClick={onSubmit} disabled={!isValid}>
            Cadastrar
          </Button>
        </Footer>
      </Content>
    </Container>
  );
};

export default RegisterPage;
