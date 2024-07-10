import styled from "styled-components";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  textField: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "inherit",
    },
  },
}));

export const GenericInput = styled(TextField)`
  background: #fff;
  /* width: 374px; */
  /* height: 50px; */
  border-radius: 4px;
  color: var(--textColor);
  font-family: var(--mulish);
  font-size: 24px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0px;
  text-align: left;
  outline: none;
  &::placeholder {
    color: var(--secondaryColor);
  }
`;

export const ClearIcon = styled.img``;
