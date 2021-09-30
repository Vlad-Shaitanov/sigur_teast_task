import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, submitCount },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Отправлено", data);
  };

  const nameField = watch("name");
  const ageField = watch("age");

  // console.log("nameField", nameField);
  // console.log("ageField", ageField);

  console.log("error", errors);
  let errorsStatus = !!Object.keys(errors).length;
  console.log("errorOBJ", errorsStatus);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Форма</h1>
        <label htmlFor="surname" style={{ display: "block" }}>
          Фамилия
        </label>
        <input
          type="text"
          defaultValue="John"
          id="name"
          {...register("name", {
            required: true,
            maxLength: 10,
          })}
        />
        {errors.name && <i>Обязательное поле. Не более 15 символов</i>}
        <input
          type="text"
          {...register("age", {
            required: true,
            pattern: /\d?\d/,
            min: 18,
            max: 99,
          })}
          style={{ display: "block" }}
        />
        {errors.age && <i>Обязательное числовое поле. От 18 до 99</i>}
        <select style={{ display: "block" }} {...register("answer")}>
          <option value="yes">Да</option>
          <option value="no">Нет</option>
        </select>
        <input
          type="submit"
          disabled={errorsStatus}
          style={{ display: "block" }}
        />
        Форма отправлена {submitCount} раз.
      </form>
    </div>
  );
}

export default App;
