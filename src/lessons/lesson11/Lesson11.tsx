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

import { useEffect, useState } from "react";
import axios from "axios";
import { v4 } from "uuid";

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
  const [facts, setFacts] = useState<string[]>([]); //I use array to keep facts
  const [isDeleteButton, setIsDeleteButton] = useState<boolean>(true);
  // const [isDeleteFact, setIsDeleteFact] = useState<boolean>(true);

  const clickDeleteAll = () => {
    setFacts([]);
    setIsDeleteButton(false);
  };

  // const deleteGroup = (id: number) => {
  //   setCatFactsGroups((prevGroups) => prevGroups.filter(group => group.id !== id));
  //need to save array of objects with key and fact
  //so we create new array by filtering old array without selected element id


  const createFactBlocks = facts.map((fact) => (
    <FactBlock key={v4()}>
      {fact}
    </FactBlock>
  ));
  

  const fetchData = async () => {
    const API_URL: string = "https://catfact.ninja/fact";
    setError(undefined);

    try {
      setIsSpinner(true);
      const response = await axios.get(API_URL);
      setIsDeleteButton(true);
      setFacts((prevValue) => [...prevValue, response.data.fact]); //described at consultation
    } catch (error: any) {
      setError(error.message);
      setFacts([]);
    } finally {
      setIsSpinner(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  //as far as I understand in this case I need useEffect here
  //only due to the requirement of the task to get data when load the page(mounting)

  return (
    <PageWrapper>
      <ButtonWrapper>
        <Button name="Get More Info" onClick={fetchData} type="button"></Button>
      </ButtonWrapper>
      <InfoContainer>
        
          <FactBlock>
            {createFactBlocks}
            
            {/* {isDeleteFact && <Button
            name="X"
            type="button"
            onClick={clickDeleteFact}
            
          ></Button>} */}
          </FactBlock>
        

        {isSpinner && <Spinner></Spinner>}
        {error && <Error>{error}</Error>}
      </InfoContainer>
      <ButtonWrapper>
        {isDeleteButton && (
          // { facts.length &&( //Чтобы не создавать отдельный стейт для контроля отображения кнопки, можно сделать проще
          <Button
            name="Delete All"
            type="button"
            onClick={clickDeleteAll}
            // disabled={facts.length === 0}
          ></Button>
        )}
      </ButtonWrapper>
    </PageWrapper>
  );
}
export default Lesson11;
