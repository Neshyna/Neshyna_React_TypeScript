// В компоненте BlogManagement.tsx дожны быть:

// input - в который вы будете вводить сообщение,
// которое хотите запостить в своем блоге
// (он должен контролироваться через useState)
// кнопка "Post", при клике на которую вы кладете
// данные в отдельный стейт(нужен для того,
//  чтобы хранить данные которые мы запостили,
// а не ввели)
// в этом компоненте вы должны вызвать компонент Card

import { useState, createContext, ChangeEvent } from "react";
import Card from "../Card/Card";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import {
  BlogManagementWrapper,
  BlogMangementTitle,
  ButtonWrapper,
} from "./styles";
import { BlogManagementContextType, UserData } from "./types";

export const BlogManagementContext = createContext<string>("");

function BlogManagement() {
  const [postedData, setPost] = useState<string>("");
  const [inputData, setInput] = useState<string>("");

  const addPost = () => {
    setPost(inputData);
    setInput("");
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <BlogManagementContext.Provider value={postedData}>
      <BlogManagementWrapper>
        <BlogMangementTitle>Blog Management</BlogMangementTitle>
        <Input
          name="input"
          placeholder="insert message"
          type="text"
          id="input"
          onChange={onChangeInput}
          value={inputData}
        ></Input>
        <ButtonWrapper>
          <Button name="POST" type="button" onClick={addPost}></Button>
        </ButtonWrapper>
        <Card />
      </BlogManagementWrapper>
    </BlogManagementContext.Provider>
  );
}
export default BlogManagement;
