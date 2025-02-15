import { useEffect, useState } from "react";
import { Footer, Header } from "../../components";
import {
  Container,
  Table,
  Td,
  Th,
  Tr,
  Mobile,
  Card,
  ContentCard,
  HeaderCard,
  InfoCard,
  InfoTitle,
  InfoValue,
  TitleCard,
  Skeleton,
  LoadingMobile,
  LoadingDiv,
} from "./StyledHome";
import { toast, ToastContainer } from "react-toastify";
import { useAuthStore } from "../../store/store";
import { useNavigate } from "react-router";

interface iPlanets {
  next: string;
  results: {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
  }[];
}

const HomePage = () => {
  const [planets, setPlanets] = useState<iPlanets["results"]>();
  const [loading, setLoading] = useState(false);

  const { currentUser, logout } = useAuthStore();

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((data: iPlanets) => {
        setPlanets(data.results);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Erro ao buscar os dados dos planetas");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Header
        userName={currentUser?.name}
        onLogout={() => {
          logout();
          navigate("/");
        }}
      />
      <ToastContainer />
      <Container>
        <Table>
          <thead>
            <tr>
              <Th>Nome</Th>
              <Th>Período de rotação</Th>
              <Th>Período de orbita</Th>
              <Th>Diâmetro</Th>
              <Th>Clima</Th>
              <Th>Gravidade</Th>
              <Th>Terreno</Th>
              <Th>Água Superficial</Th>
              <Th>População</Th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <Tr key={index}>
                    {Array.from({ length: 9 }).map((_, i) => (
                      <Td key={i}>
                        <Skeleton />
                      </Td>
                    ))}
                  </Tr>
                ))
              : planets?.map((planet) => (
                  <Tr key={planet.name}>
                    <Td>{planet.name}</Td>
                    <Td>{planet.rotation_period}</Td>
                    <Td>{planet.orbital_period}</Td>
                    <Td>{planet.diameter}</Td>
                    <Td>{planet.climate}</Td>
                    <Td>{planet.gravity}</Td>
                    <Td>{planet.terrain}</Td>
                    <Td>{planet.surface_water}</Td>
                    <Td>{planet.population}</Td>
                  </Tr>
                ))}
          </tbody>
        </Table>
        <Mobile>
          {loading ? (
            <LoadingDiv
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "80vh",
              }}
            >
              <LoadingMobile />
            </LoadingDiv>
          ) : (
            <>
              {planets?.map((planet) => (
                <Card key={planet.name}>
                  <HeaderCard>
                    <TitleCard>{planet?.name}</TitleCard>
                  </HeaderCard>
                  <ContentCard>
                    <InfoCard>
                      <InfoTitle>Período de rotação:</InfoTitle>
                      <InfoValue>{planet?.rotation_period}</InfoValue>
                    </InfoCard>
                    <InfoCard>
                      <InfoTitle>Período de Órbita:</InfoTitle>
                      <InfoValue>{planet?.orbital_period}</InfoValue>
                    </InfoCard>
                    <InfoCard>
                      <InfoTitle>Diâmetro:</InfoTitle>
                      <InfoValue>{planet?.diameter}</InfoValue>
                    </InfoCard>
                    <InfoCard>
                      <InfoTitle>Clima:</InfoTitle>
                      <InfoValue>{planet?.climate}</InfoValue>
                    </InfoCard>
                    <InfoCard>
                      <InfoTitle>Gravidade:</InfoTitle>
                      <InfoValue>{planet?.gravity}</InfoValue>
                    </InfoCard>
                    <InfoCard>
                      <InfoTitle>Terreno:</InfoTitle>
                      <InfoValue>{planet?.terrain}</InfoValue>
                    </InfoCard>
                    <InfoCard>
                      <InfoTitle>População:</InfoTitle>
                      <InfoValue>{planet?.population}</InfoValue>
                    </InfoCard>
                  </ContentCard>
                </Card>
              ))}
            </>
          )}
        </Mobile>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
