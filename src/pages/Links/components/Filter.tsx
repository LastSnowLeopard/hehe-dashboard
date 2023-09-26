import * as React from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const CustomFormControl = styled(FormControl)(() => ({
  margin: 0
}))

const Filter: React.FC = () => {
  const [age, setAge] = React.useState("month");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <CustomFormControl variant="standard" sx={{ maxWidth: 120, border: "none" }}>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={age}
        onChange={handleChange}
        sx={{
          border: "none"
        }}
      >
        <MenuItem value={"month"}>month</MenuItem>
        <MenuItem value={"year"}>year</MenuItem>
      </Select>
    </CustomFormControl>
  );
}

export default Filter;
