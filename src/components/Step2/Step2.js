import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import Typography from "@mui/material/Typography";
import { MainContainer } from "../MainContainer/MainContainer";
import { Form } from "../Form/Form";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { Workplace } from "../Workplace/Workplace";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

const scheme = yup.object().shape({});

export const Step2 = () => {
  // const history = useHistory();
  const {
    register,
    handleSubmit,
    control,
    watch,
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
              <Workplace control={control} error={errors} watch={watch} />
            )}
          </Box>
        </Box>
        <PrimaryButton>Сохранить и перейти далее</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
