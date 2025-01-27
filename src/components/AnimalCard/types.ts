import { ReactNode } from "react";

export interface AnimalProps {
  animalName: string;
  animalSpecies: string;
  animalImg: string;
  children?: ReactNode;
}
