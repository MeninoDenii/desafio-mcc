import {
  Card,
  ContentCard,
  HeaderCard,
  InfoCard,
  InfoTitle,
  InfoValue,
  TitleCard,
} from "./StyledCard";

interface iCardMobileProps {
  planet: {
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
  };
}

const CardMobile: React.FC<iCardMobileProps> = ({ planet }) => {
  return (
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
  );
};

export default CardMobile;
