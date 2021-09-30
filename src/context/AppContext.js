import React, { createContext, useContext, useState } from "react";

//Создание контекста
const AppContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const setValues = (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <AppContext.Provider value={{ data, setValues }}>
      {children}
    </AppContext.Provider>
  );
};

export const useData = () => {
  useContext(AppContext);
};
