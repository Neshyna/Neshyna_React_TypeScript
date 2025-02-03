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
    // .oneOf([true], 'Accept agreement')
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
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
        {/*   <CheckboxContainer>
        <Checkbox
          type='checkbox'
          id='agree_id'
          name='agreement'
          checked={formik.values.agreement}
          onChange={formik.handleChange}
        /> */}
      </InputsWrapper>
      <ButtonWrapper>
        <Button name="Create" type="submit"></Button>
      </ButtonWrapper>
    </EmployeeInfo>
  );
}

export default EmployeeForm;
