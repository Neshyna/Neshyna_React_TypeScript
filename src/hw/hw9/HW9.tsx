import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { useState, ChangeEvent } from "react";
import {
  InputsContainer,
  HW9Wrapper,
  ResultContainer,
  AgeBlock,
  NameBlock,
} from "./styles";

function HW9() {
  const [userNameValue, setUserNameValue] = useState<string>("");
  const [ageValue, setAgeValue] = useState<string>("");
  const [savedData, setSavedDataToBlocks] = useState<{
    userNameValue: string;
    ageValue: string;
  }>();


  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserNameValue(event.target.value);
  };

  const onChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
    setAgeValue(event.target.value);
  };

  const submitData = () => {
    if (ageValue === "" || userNameValue === "") {
      alert("Fields are empty.");
    } else {
      setSavedDataToBlocks({ userNameValue, ageValue });
    }
  };
  console.log(savedData);
  

  return (
    <HW9Wrapper>
      <InputsContainer>
        <Input
          name="user_name"
          label="User name"
          id="name_id"
          placeholder="Enter your name"
          value={userNameValue}
          onChange={onChangeName}
        />
        <Input
          name="age"
          label="Age"
          id="age_id"
          placeholder="Enter your age"
          value={ageValue}
          onChange={onChangeAge}
        />
        <Button name="Submit Data" type="button" onClick={submitData}></Button>
      </InputsContainer>
      
      {savedData && (
      <ResultContainer>
        <NameBlock>{savedData.userNameValue}</NameBlock>
        <AgeBlock>{savedData.ageValue}</AgeBlock>
      </ResultContainer>
       )}
    </HW9Wrapper>
  );
}

export default HW9;
