// Требования по ДЗ:

// Cоздайте компонент Homework10 в папке homeworks, в нем должно быть 2 компонента Input
// Каждый из инпутов должен быть котролируемым компонентом и контролироваться с помощью родительского состояния
// При изменении значения в первом поле должен отправляться запрос на URL https://dog.ceo/api/breeds/image/random,
//  после того, как данные придут, их необходимо отобразить на странице (это будет картинка)

// Задача *
// При ожидании ответа от сервера необходимо показывать спиннер
// При получении ошибки её необходимо отобразить на странице

import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import {
  ErrorContainer,
  HW10Container,
  InputContainer,
  Response,
} from "./styles";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";

function HW10() {
  const [inputData, setInputData] = useState<string>("");
  const [inputData2, setInputData2] = useState<string>("");
  const [responseData, setResponseData] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [isSpinner, setIsSpinner] = useState<boolean>(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

  const onChange2Input = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData2(event.target.value);
  };

  const fetchData = async () => {
    const API_URL: string = "https://dog.ceo/api/breeds/image/random";
    setResponseData(" ");
    setError(undefined);

    try {
      setIsSpinner(true);
      const result = await axios.get(API_URL);
      setResponseData(result.data.message);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsSpinner(false);
    }
  };

  useEffect(() => {
    if (inputData) {
      fetchData();
    }
  }, [inputData]);

  return (
    <HW10Container>
      <InputContainer>
        <Input name="inputOne" value={inputData} onChange={onChange} />
        <Input name="inputTwo" value={inputData2} onChange={onChange2Input} />
      </InputContainer>
      {responseData && <Response src={responseData}></Response>}
      {isSpinner && <Spinner />}
      {error && <ErrorContainer>{error}</ErrorContainer>}
    </HW10Container>
  );
}

export default HW10;
