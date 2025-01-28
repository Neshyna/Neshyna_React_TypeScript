import { ChangeEvent, useEffect, useState } from "react";

import Input from "../../components/Input/Input";
import { InputsContainer, Lesson09Wrapper, Result } from "./styles";

function Lesson09() {
  //Неконтролируемый компонент - значение которого мы не контролируем, 
  // то есть не создаём никакого локального хранилища, в котором будет храниться значение

  //Контролируемый компонент - состояние кторого, храниться внутри компонента React и мы можем 
  //контролировать его изменение
  //1 шаг контроля - создание стейта, в котором мы будем хранить значение инпута
  const [userNameValue, setUserNameValue] = useState<string>('Tom');
  const [ageValue, setAgeValue] = useState<string>('');


  //2 шаг контроля - создание функции, которая будет забирать значение введённое пользователем
  //из объекта event и сохранять его в state
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    // setUserNameValue(`${event.target.value} react`)
    setUserNameValue(event.target.value)
  }

  const onChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
    setAgeValue(event.target.value)
  }

  // console.log('Get data')

  //useEffect при монтировании компонента (первый рендер)
  //Чтобы функция (1-й аргумент) выполнилась только 1 раз при первом рендере
  // передаётся пустой массив зависимостей (2-й аргумент)
  useEffect(() => {
    console.log('Mounting');
  }, [])

  //useEffect при обновлении компонента (повторный рендер)
  //Чтобы функция (1-й аргумент) выполнилась при изменении значения в первом инпуте
  // передаётся массив зависимостей с тем стейтом (значением), при изменении которого нужно выполнять функцию (2-й аргумент)
  useEffect(() => {
    console.log('Update');
  }, [userNameValue])

  //useEffect при размонтировании компонента (до момента удаления)
  //Чтобы функция (1-й аргумент) выполнилась один раз, но непосредственно перед удалением компонента
  //в первом аргументе (функции) необходимо вернуть другую функцию, которая и будет выполнять перед размонтированием
  //2-й аргумент - пустой массив зависимостей
  useEffect(() => {
    return () => {
      console.log('Unmounting');
    }
  }, [])

  return (
    <Lesson09Wrapper>
      <InputsContainer>
        <Input
          name='user_name'
          label="User name"
          id='name_id'
          placeholder="Enter your name"
          value={userNameValue}
          onChange={onChangeName}
        />
        <Input
          name='age'
          label="Age"
          id='age_id'
          placeholder="Enter your age"
          value={ageValue}
          onChange={onChangeAge}
        />
        <Result>{userNameValue}</Result>
      </InputsContainer>
    </Lesson09Wrapper>
  )
}

export default Lesson09;
