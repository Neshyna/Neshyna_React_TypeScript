import "./styles.css";
import { AnimalProps } from "./types";
import { AnimalWrapper, CardImg, Div, H3 } from "./styles.ts";

function AnimalCard({
  animalName,
  animalSpecies,
  animalImg,
  children,
}: AnimalProps) {
  return (
    <AnimalWrapper>
      <H3>{animalName}</H3>
      <Div>{animalSpecies}</Div>
      <CardImg src={animalImg} />
      {children}
    </AnimalWrapper>
  );
}
export default AnimalCard;
