import { Skeleton, TableContainer, Td, Th, Tr } from "./StyledTable";

interface iTableProps {
  loading: boolean;
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

const Table: React.FC<iTableProps> = ({ loading, results }) => {
  return (
    <TableContainer>
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
          : results?.map((planet) => (
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
    </TableContainer>
  );
};

export default Table;
