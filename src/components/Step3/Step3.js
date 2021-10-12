import React, { useState } from "react";
import { MainContainer } from "../MainContainer/MainContainer";
import { Form } from "../Form/Form";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { Input } from "../Input/Input";
import { ForeignLanguages } from "../ForeignLanguages/ForeignLanguages";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const Step3 = () => {
  //Выбор вида образования
  const [educ, setEduc] = React.useState("");
  const handleEducation = (event) => {
    setEduc(event.target.value);
  };

  //Добавление компонента с иностранными языками
  const [lang, setLang] = useState([]);
  const handleLanguage = () => {
    setLang((prevState) => [...prevState, "new lang"]);
  };

  const history = useHistory();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur", //Режим валидации(по событию)
    // resolver: yupResolver(scheme), //Запуск внешнего метода проверки
  });

  const onSubmit = (data) => {
    console.log("DATA", data);

    //Переход к следующему шагу
    // history.push("/result");
    // console.log("ERRORS", errors);
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5" sx={{ textAlign: "center" }}>
        <HistoryEduIcon sx={{ mr: 1 }} fontSize="large" />
        Образование:
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth>
          <InputLabel id="education-select-label">
            Уровень образования:
          </InputLabel>
          <Select
            {...register("educationType")}
            labelId="education-select-label"
            id="educationType"
            value={educ}
            label="Уровень образования"
            name="educationType"
            onChange={handleEducation}
          >
            <MenuItem value="middle">Среднее</MenuItem>
            <MenuItem value="middleProf">Среднее профессиональное</MenuItem>
            <MenuItem value="unfinishedHigher">Незаконченное высшее</MenuItem>
            <MenuItem value="higherBachelor">Высшее(бакалавриат)</MenuItem>
            <MenuItem value="higherMaster">Высшее(магистратура)</MenuItem>
          </Select>
        </FormControl>
        <Input
          control={control}
          id="nativeLanguage"
          name="nativeLanguage"
          label="Родной язык"
          error={errors}
        />
        <Box>
          <Typography variant="subtitle2" align="center" sx={{ mb: 2, mt: 2 }}>
            Знание иностранных языков:
          </Typography>
          {lang.map((place, indx) => (
            <ForeignLanguages
              control={control}
              error={errors}
              watch={watch}
              register={register}
              index={indx}
              // key={uuidv4()}
              key={indx}
            />
          ))}
          <Button size="medium" variant="contained" onClick={handleLanguage}>
            Добавить место
          </Button>
        </Box>
        <PrimaryButton>Сохранить и перейти далее</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
