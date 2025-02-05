// В компоненте BlogManagement.tsx дожны быть:

// input - в который вы будете вводить сообщение,
// которое хотите запостить в своем блоге
// (он должен контролироваться через useState)
// кнопка "Post", при клике на которую вы кладете
// данные в отдельный стейт(нужен для того,
//  чтобы хранить данные которые мы запостили,
// а не ввели)
// в этом компоненте вы должны вызвать компонент Card

import { useState, createContext } from "react";
import Card from "../Card/Card";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import {
  BlogManagementWrapper,
  BlogMangementTitle,
  ButtonWrapper,
} from "./styles";
import { BlogManagementContextType, UserData } from "./types";

export const BlogManagementContext = createContext<BlogManagementContextType>({
  data: undefined,
  onDataChange: () => {},
});

function BlogManagement() {
  const [userData, setUserData] = useState<UserData>({
    firstName: "Masha",
    lastName: "Neshyna",
  });
  const [postedData, setPost] = useState<string>("");
  const [inputData, setInput] = useState<string>("");

  const addPost = () => {
    setPost(inputData);
    setInput("");
  };

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInput(target.value);
  };

  return (
    <BlogManagementContext.Provider
      value={{
        data: userData,
      }}
    >
      <BlogManagementWrapper>
        <BlogMangementTitle>Blog Management</BlogMangementTitle>
        <Input
          name="input"
          placeholder="insert message"
          type="text"
          id="input"
          onChange={onChange}
          value={inputData}
        ></Input>
        <ButtonWrapper>
          <Button name="POST" onClick={addPost}></Button>
        </ButtonWrapper>
        {postedData && userData && (
          <Card cardData={userData} text={postedData} />
        )}
      </BlogManagementWrapper>
    </BlogManagementContext.Provider>
  );
}
export default BlogManagement;
