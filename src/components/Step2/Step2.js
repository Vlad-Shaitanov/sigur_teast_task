import React, { useState } from "react";
import WorkIcon from "@mui/icons-material/Work";
import Typography from "@mui/material/Typography";
import { MainContainer } from "../MainContainer/MainContainer";
import { Form } from "../Form/Form";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { Workplace } from "../Workplace/Workplace";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// const scheme = yup.object().shape({});
const scheme = yup
  .object()
  .shape({
    // untilNow: yup.boolean(),
    // haveExp: yup.string(),
    job: yup.array().of(
      yup.object().shape({
        company: yup
          .string()
          .matches(/^([^0-9]*)$/, "Название не должно содержать числа")
          .required("Обязательное поле"),
        startWork: yup.date().required("Обязательное поле"),
        endWork: yup.date().required("Обязательное поле"),
        workPosition: yup.string().required("Обязательное поле"),
      })
    ),
  })
  .required();

// todo Разобраться с ошибками в именовании атрибутов, возникающими при работе с датапикером
// todo Отрефакторить инпут для одиночного применения и в цикле
// todo Решить проблему падения проекта, когда форма отправляется с пустыми полями и затем нажата кнопка добавления нового места (шаг2)

export const Step2 = () => {
  //Места работы
  const [works, setWorks] = useState([]);

  const history = useHistory();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      untilNow: true,
    },
    mode: "onBlur", //Режим валидации(по событию)
    resolver: yupResolver(scheme), //Запуск внешнего метода проверки
    // resolver: yupResolver(valdationSchema), //Запуск внешнего метода проверки
  });

  const handleWorkplace = () => {
    setWorks((prevState) => [...prevState, "new place"]);
  };

  const onSubmit = (data) => {
    console.log("DATA", data);

    //Переход к следующему шагу
    // history.push("/step3");
    console.log("ERRORS STEP2", errors);
  };
  console.log("ERRORS STEP2", errors);

  //Если нажата кнопка "Есть", будем отрисовывать компонент
  let experience = watch("haveExp");

  return (
    <MainContainer>
      <Typography component="h2" variant="h5" sx={{ textAlign: "center" }}>
        <WorkIcon sx={{ mr: 1 }} />
        Опыт работы:
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Typography variant="subtitle2" align="center" sx={{ mb: 2, mt: 2 }}>
            Имеется ли у Вас опыт работы?
          </Typography>
          <Box>
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="experience"
                name="experience-group"
                {...register("haveExp")}
              >
                <FormControlLabel
                  value="haveExp"
                  control={<Radio />}
                  label="Есть"
                />
                <FormControlLabel
                  value="noExp"
                  control={<Radio />}
                  label="Отсутствует"
                />
              </RadioGroup>
            </FormControl>
            {experience && (
              <>
                <p style={{ textAlign: "center" }}>Места работы:</p>
                {works.map((place, indx) => (
                  <Workplace
                    control={control}
                    error={errors}
                    watch={watch}
                    register={register}
                    index={indx}
                    // key={uuidv4()}
                    key={indx}
                  />
                ))}
                <Button
                  size="medium"
                  variant="contained"
                  onClick={handleWorkplace}
                >
                  Добавить место
                </Button>
              </>
            )}
          </Box>
        </Box>
        <PrimaryButton>Сохранить и перейти далее</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
