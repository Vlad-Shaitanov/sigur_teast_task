import React from "react";
import Typography from "@mui/material/Typography";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { MainContainer } from "../MainContainer/MainContainer";
import { Form } from "../Form/Form";
import { Input } from "../Input/Input";
import { useForm } from "react-hook-form";

export const Step1 = () => {
  // const { register, handleSubmit, errors } = useForm({
  //   mode: "onBlur",
  // });

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        <EmojiPeopleIcon />
        ШАГ 1
      </Typography>
      <Form>
        {/*<Input*/}
        {/*ref={register}*/}
        {/*id="lastName"*/}
        {/*type="text"*/}
        {/*label="Фамилия"*/}
        {/*name="lastName"*/}
        {/*/>*/}
        {/*<Input*/}
        {/*ref={register}*/}
        {/*id="firstName"*/}
        {/*type="text"*/}
        {/*label="Имя"*/}
        {/*name="firstName"*/}
        {/*/>*/}
      </Form>
    </MainContainer>
  );
};
