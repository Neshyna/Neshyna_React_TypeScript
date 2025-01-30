// Задача: необходимо разработать компонент (Lesson11), для получения и отображение данных,
// полученных по запросу (факт о котах)

// Требования:
// При загрузке страницы должен происходить запрос на получение данных
// Данные должны отображаться в стилизованном блоке на странице
// Пока данных нет, то блок отображаться не должен
// Также на странице должна быть кнопка ‘GET MORE INFO’,
//  при нажатии на которую также должен происходить запрос данных
// При получении данных после клика на кнопку они должны появиться на экране под предыдущими данными
// Когда размер блока с данными заходит за предел 700px блок расширяться в высоту не должен,
//  а должен появиться скролл внутри блока с данными
// На странице должна быть вторая кнопка “DELETE ALL DATA”, которая будет удалять все полученные данные
// (при отсутствии фактов в блоке, кнопка должна исчезать)

// https://catfact.ninja/fact

// Дополнительная задача (только по желанию)*:

// К каждому факту о котах добавить кнопку DELETE или X, 
// при нажатии на которую , соответствующий факт о котах должен быть удалён

import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import {v4 } from 'uuid';

import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";
import {
  PageWrapper,
  InfoContainer,
  FactBlock,
  Error,
  ButtonWrapper,
} from "./styles";


function Lesson11() {
  const [isSpinner, setIsSpinner] = useState<boolean>(false);
  const [error, setError] = useState<undefined | string>(undefined);
  const [facts, setFacts] = useState<string[]>([]);//I use array to keep facts
  const [isInfoContainer, setIsInfoContainer] = useState<boolean>(true);

  // const clickGetInfo = () => {
  //   setFact(fact);
  // };

  const clickDeleteAll = () => {
    setFacts([]); 
    setIsInfoContainer(false);
  };

  const fetchData = async () => {
    const API_URL: string = "https://catfact.ninja/fact";
    setError(undefined);
    
    try {
      setIsSpinner(true);
      const response = await axios.get(API_URL);
      setFacts((prevValue) => [...prevValue, response.data.fact]);//this method gleb has described at consultation
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsSpinner(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PageWrapper>
      <ButtonWrapper>
        <Button name="Get More Info" onClick={fetchData} type="button"></Button>
      </ButtonWrapper>
      <InfoContainer>
        {facts.map((fact) => (
          <FactBlock key={v4()}>{fact}</FactBlock>
        ))}
        </InfoContainer>
      <ButtonWrapper>
        <Button
          name="Delete All"
          type="button"
          onClick={clickDeleteAll}
          disabled={!isInfoContainer}
        ></Button>
      </ButtonWrapper>
      {isSpinner && <Spinner></Spinner>}
      {error && <Error>{error}</Error>}
    </PageWrapper>
  );
}
export default Lesson11;
