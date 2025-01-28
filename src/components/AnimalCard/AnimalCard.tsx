import "./styles.css";
import { AnimalProps } from "./types";
import { AnimalWrapper, CardImg } from "./styles.ts";

function AnimalCard({
  animalName,
  animalSpecies,
  animalImg,
  children,
}: AnimalProps) {
  return (
    <AnimalWrapper>
      <h3>{animalName}</h3>
      <div>{animalSpecies}</div>
      <CardImg src={animalImg} />
      {children}
    </AnimalWrapper>
  );
}
export default AnimalCard;
