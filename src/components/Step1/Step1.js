import React from "react";
import Typography from "@mui/material/Typography";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { MainContainer } from "../MainContainer/MainContainer";
import { Form } from "../Form/Form";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { SelectBlock } from "../Select/Select";
import { CustomSelect } from "../Select/CustomSelect";
import { Input } from "../Input/Input";

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
  city: yup
    .string()
    .matches(/^([^0-9]*)$/, "Название не должно содержать числа")
    .required("Обязательное поле"),
  birthday: yup
    .date()
    .min("1930-01-01", "Слишком маленькая дата")
    .max("2005-01-01", "Слишком большая дата")
    .required("Обязательное поле"),
  gender: yup.string().required("Обязательное поле"),
  citizenship: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле должно содержать только буквы")
    .required("Обязательное поле"),
  position: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле должно содержать только буквы")
    .required("Обязательное поле"),
  sum: yup
    .string()
    // .matches(/[^a-zA-Zа-яА-Я]/g, "Поле должно содержать только цифры")
    .matches(/([^a-zA-Zа-яА-Я\D*])/g, "Поле должно содержать только цифры")
    .required("Обязательное поле"),
  currency: yup.string().required("Обязательное поле"),
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
    history.push("/step2/");
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
          // control={control}
          id="photo"
          type="file"
          accept=".jpeg, .jpg, .png"
          name="photo"
          // error={errors}
        />
        <Input
          control={control}
          id="lastName"
          type="text"
          label="Фамилия"
          name="lastName"
          error={errors}
        />
        <Input
          control={control}
          id="firstName"
          type="text"
          label="Имя"
          name="firstName"
          error={errors}
        />
        <Input
          control={control}
          id="secondName"
          type="text"
          label="Отчество"
          name="secondName"
          error={errors}
        />
        <Input
          control={control}
          id="city"
          type="text"
          label="Город проживания"
          name="city"
          error={errors}
        />
        <TextField
          {...register("birthday")}
          variant="outlined"
          margin="normal"
          fullWidth
          id="birthday"
          label="Дата рождения"
          type="date"
          name="birthday"
          defaultValue="2006-01-01"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors.birthday}
          helperText={errors?.birthday?.message}
        />
        <SelectBlock
          control={control}
          error={errors}
          id="gender"
          label="Пол"
          name="gender"
        />
        <Input
          control={control}
          id="citizenship"
          label="Гражданство"
          type="text"
          name="citizenship"
          error={errors}
        />
        <Input
          control={control}
          id="position"
          label="Желаемая позиция"
          type="text"
          name="position"
          error={errors}
        />
        <CustomSelect
          control={control}
          error={errors}
          id="salary"
          label="Зарплата"
          name="salary"
        />
        <Input
          control={control}
          error={errors}
          id="aboutme"
          label="О себе"
          type="text"
          name="aboutme"
          multiline={true}
          maxRows={4}
        />
        <PrimaryButton>Сохранить и перейти далее</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
