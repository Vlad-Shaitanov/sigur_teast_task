import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const SelectBlock = React.forwardRef((props, ref) => {
  const [gender, setgender] = React.useState("");

  const handleChange = (event) => {
    setgender(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="genderSelect">Пол</InputLabel>
      <Select {...props} inputRef={ref} value={gender} onChange={handleChange}>
        <MenuItem value={10}>Мужской</MenuItem>
        <MenuItem value={20}>Женский</MenuItem>
      </Select>
    </FormControl>
  );
});

// export const SelectBlock = (props, ref) => {
//   const [gender, setgender] = React.useState("");
//   console.log("props", props);
//
//   const handleChange = (event) => {
//     setgender(event.target.value);
//   };
//
//   return (
//     <FormControl fullWidth>
//       <InputLabel id="genderSelect">Пол</InputLabel>
//       <Select
//         {...props}
//         labelId="genderSelect"
//         id="gender"
//         // inputRef={ref}
//         value={gender}
//         label="Пол"
//         name="Пол"
//         onChange={handleChange}
//       >
//         <MenuItem value={10}>Мужской</MenuItem>
//         <MenuItem value={20}>Женский</MenuItem>
//       </Select>
//     </FormControl>
//   );
// };
