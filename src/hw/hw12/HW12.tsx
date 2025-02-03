// Задание

// Создайте компоент EmployeeForm, который должен содержать в себе форму
// Контролировать форму нужно с помощью Formik
// Валидацию формы необходимо сделать через Yup
// Форма должна содержать следующие элементы:
// "Full Name":
// компонент Input;
// обязательное поле;
// тип данных: string;
// минимальное количество символов - 5;
// максимальное количество символов - 50
// "Age":
// компонент Input;
// обязательное поле;
// тип данных: number;
// минимальное значение - 18; (метод для валидации min)
// максимальное значение - 80; (метод для валидации max)
// "Job Title":
// компонент Input;
// опциональное поле;
// тип данных: string;
// максимальное количество символов - 30;
// "Create":
// кнопка с типом Submit. При клике на нее необходимо вывести сообщение в консоль,
// в котором будут перечислены все значения из полей

// Задача со *
// Добавить чекбокс "Правила использования":
// checkbox(значение по умолчанию - false);
// тип данных: boolean;

import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import { ButtonWrapper, EmployeeInfo, InputsWrapper, Title } from "./styles";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const schema = Yup.object().shape({
    fullName: Yup.string()
      .required("Reqiured field")
      .min(5, "Min 5 symbols")
      .max(50, "Max 50 symbols")
      .typeError("Incorrect value"),

    age: Yup.number()
      .required("Required field")
      .min(18, "Min 18 years")
      .max(80, "Max 80 years")
      .typeError("Incorrect value"),

    jobTitle: Yup.string()
      .max(30, "Max 80 symbols")
      .typeError("Incorrect value"),

    usegeRules: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: 0,
      jobTitle: "",
      usageRules: false,
    } as EmployeeFormValues,
    validationSchema: schema,
    validateOnChange: false,

    onSubmit: (values: EmployeeFormValues) => {
      console.log(values);
    },
  });

  return (
    <EmployeeInfo onSubmit={formik.handleSubmit}>
      <Title>Employee Info</Title>
      <InputsWrapper>
        <Input
          name="fullName"
          label="Full Name*"
          type="text"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          placeholder="Enter full name"
          error={formik.errors.fullName}
        ></Input>
        <Input
          name="age"
          label="age*"
          type="number"
          value={formik.values.age}
          onChange={formik.handleChange}
          placeholder="Enter age"
          error={formik.errors.age}
        ></Input>
        <Input
          name="jobTitle"
          label="Job title"
          type="text"
          value={formik.values.jobTitle}
          onChange={formik.handleChange}
          placeholder="Enter job title"
          error={formik.errors.jobTitle}
        ></Input>
        <Input
          name="usageRules"
          label="Usage rules"
          type="checkbox"
          checked={formik.values.usageRules}
          onChange={formik.handleChange}
        ></Input>
      </InputsWrapper>
      <ButtonWrapper>
        <Button name="Create" type="submit"></Button>
      </ButtonWrapper>
    </EmployeeInfo>
  );
}

export default EmployeeForm;
