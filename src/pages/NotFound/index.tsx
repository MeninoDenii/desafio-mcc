import { Container } from "./StyledNotFound";

import NotFound from "../../assets/notFound.svg";

const NotFoundPage = () => {
  return (
    <Container>
      <img src={NotFound} width={600} alt="Not Found" />
    </Container>
  );
};

export default NotFoundPage;
