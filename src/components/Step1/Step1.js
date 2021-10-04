import React from "react";
import Typography from "@mui/material/Typography";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
// import { ErrorMessage } from "@hookform/error-message";
import { MainContainer } from "../MainContainer/MainContainer";
import { Form } from "../Form/Form";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { SelectBlock } from "../Select/Select";

//Схема данных(как валидировать поля)
const scheme = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Имя не должно содержать числа")
    .required("Обязательное поле"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Фамилия не должна содержать числа")
    .required("Обязательное поле"),
  date: yup
    .date()
    .min("1999-01-01", "Слишком маленькая дата")
    .max("2010-01-01", "Слишком большая дата")
    .required("Обязательное поле"),
  gender: yup.string().required("Обязательное поле"),
});

export const Step1 = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,

    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur", //Режим валидации(по событию)
    resolver: yupResolver(scheme), //Запуск внешнего метода проверки
  });

  const onSubmit = (data) => {
    console.log("DATA", data);

    //Переход к следующему шагу
    // history.push("/step2/");
    // console.log("ERRORS", errors);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5" sx={{ textAlign: "center" }}>
        <EmojiPeopleIcon />
        Основная информация:
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="photo">Добавить фото</label>
        <TextField
          {...register("photo")}
          variant="outlined"
          margin="normal"
          fullWidth
          id="photo"
          type="file"
          accept=".jpeg, .jpg, .png"
          name="photo"
        />
        <TextField
          {...register("lastName")}
          variant="outlined"
          margin="normal"
          fullWidth
          id="lastName"
          type="text"
          label="Фамилия"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <TextField
          {...register("firstName")}
          variant="outlined"
          margin="normal"
          fullWidth
          id="firstName"
          type="text"
          label="Имя"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <TextField
          {...register("secondName")}
          variant="outlined"
          margin="normal"
          fullWidth
          id="secondName"
          type="text"
          label="Отчество"
          name="secondName"
        />
        <TextField
          {...register("city")}
          variant="outlined"
          margin="normal"
          fullWidth
          id="city"
          type="text"
          label="Город проживания"
          name="city"
        />
        <TextField
          {...register("date")}
          variant="outlined"
          margin="normal"
          fullWidth
          id="date"
          label="Дата рождения"
          type="date"
          name="date"
          defaultValue="2000-01-01"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors.date}
          helperText={errors?.date?.message}
        />
        <SelectBlock
          control={control}
          error={errors}
          id="gender"
          label="Пол"
          name="gender"
        />

        <PrimaryButton>Сохранить и перейти далее</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
