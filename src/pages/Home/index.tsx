import { useEffect, useState } from "react";
import {
  CardMobile,
  Footer,
  Header,
  Pagination,
  Table,
} from "../../components";
import {
  Container,
  Mobile,
  LoadingMobile,
  LoadingDiv,
  ContainerPagination,
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
  const [currentPage, setCurrentPage] = useState(1);

  const { currentUser, logout } = useAuthStore();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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

  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = planets?.slice(startIndex, endIndex);

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
        <Table loading={loading} results={planets || []} />
        <Mobile>
          {loading ? (
            <LoadingDiv>
              <LoadingMobile />
            </LoadingDiv>
          ) : (
            <>
              {currentItems?.map((planet) => (
                <CardMobile planet={planet} key={planet.name} />
              ))}
            </>
          )}
        </Mobile>
        {planets && (
          <ContainerPagination>
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil((planets?.length || 0) / itemsPerPage)}
              onPageChange={handlePageChange}
            />
          </ContainerPagination>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
