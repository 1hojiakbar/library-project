import { useState } from "react";
import { ClearIcon, GenericInput, useStyles } from "./style";
import IconButton from "@mui/material/IconButton";
import clear from "../../../assets/icons/close.svg";
import InputAdornment from "@mui/material/InputAdornment";

const Input = ({ clearIcon, pl, type, size }) => {
  const [value, setValue] = useState("");
  const classes = useStyles();

  const handleClear = () => {
    setValue("");
  };

  return (
    <GenericInput
      variant={type}
      size={size}
      placeholder={pl}
      value={value}
      className={classes.textField}
      onChange={(e) => setValue(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClear}>
              {clearIcon === "true" && value.length > 0 ? (
                <ClearIcon src={clear} />
              ) : null}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Input;
