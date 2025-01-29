import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import Button from "../../components/Button/Button";
import { ButtonWrapper, ErrorBlock, Lesson10Wrapper, ResultBlock } from "./styles";
import Spinner from "../../components/Spinner/Spinner";
import Input from "../../components/Input/Input";

function Lesson10() {
  const [joke, setJoke] = useState<string>('')
  const [error, setError] = useState<undefined | string>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [jokeValue, setJokeValue] = useState<string>('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setJokeValue(event.target.value)
  }

  //пример запроса с использованием fecth
  // const fetchJokeData = async () => {
  //   const JOKE_URL: string = 'https://official-joke-api.appspot.com/random_joke'
  //   try {
  //     const response = await fetch(JOKE_URL);
  //     const result = await response.json();

  //     if (response.ok) {
  //       //сохраняем в стейт данные, которые пришли в ответе, в том формате, 
  //       // который нам нужен для отображения шутки
  //       console.log(result);

  //       setJoke(`${result.setup} - ${result.punchline}`)
  //     } else {
  //       throw new Error('API Error')
  //     }
  //   } catch (error: any) {
  //     console.log(error.message);
  //   } finally {
  //     console.log('End');
  //   }
  // }

  //пример запроса с использованием axios
  const fetchJokeData = async () => {
    const JOKE_URL: string = 'https://official-joke-api.appspot.com/random_joke'
    setJoke('')
    setError(undefined)

    try {
      setIsLoading(true)
      const result = await axios.get(JOKE_URL);
      const data = result.data;
      setJoke(`${data.setup} - ${data.punchline}`)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  //отправлять запрос при загрузке страницы
  useEffect(() => { fetchJokeData() }, [])

  //отправлять запрос каждый раз при изменении значения в Input
  useEffect(() => { fetchJokeData() }, [jokeValue])

  return (
    <Lesson10Wrapper>
      {/* <ButtonWrapper>
        <Button name='GET JOKE' onClick={fetchJokeData} />
      </ButtonWrapper> */}
      <Input
        name='joke'
        value={jokeValue}
        onChange={onChange}
      />
      {joke && <ResultBlock>{joke}</ResultBlock>}
      {isLoading && <Spinner />}
      {error && <ErrorBlock>{error}</ErrorBlock>}
    </Lesson10Wrapper>
  )
}

export default Lesson10