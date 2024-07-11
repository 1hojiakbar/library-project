import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box, TextField } from "@mui/material";

// flex
const flex = css`
  display: flex;
`;

// main container
const Container = styled.div`
  ${flex}
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow-y: scroll;
`;

// form
const Form = styled.form`
  ${flex}
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 430px;
  height: max-content;
  border-radius: 12px;
  padding: 38px 28px 48px 28px;
  background: var(--whiteColor);
  box-shadow: 0px 4px 32px 0px rgba(51, 51, 51, 0.04);
`;

Form.Title = styled.h1`
  color: var(--textColor);
  font-family: var(--mulish);
  font-size: 36px;
  font-weight: 900;
  line-height: 45px;
  letter-spacing: 0%;
  text-align: center;
  margin: 0 0 36px 0px;
`;

Form.SubTitle = styled.div`
  font-family: var(--mulish);
  font-size: 14px;
  font-weight: 300;
  line-height: 30%;
  letter-spacing: 0%;
  text-align: center;
`;

const FormLink = styled(NavLink)`
  color: #6200ee;
  font-family: var(--mulish);
  font-size: 14px;
  font-weight: 300;
  line-height: 30%;
  letter-spacing: 0%;
  margin-left: 4px;
  text-align: center;
  text-decoration: none;
`;

// inputs wrapper
const InputWrapper = styled.div`
  ${flex}
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  gap: 16px;
`;

const InnerInputWrapper = styled(Box)`
  width: 100%;
`;

InputWrapper.Label = styled.div`
  align-self: flex-start;
  color: var(--textColor);
  font-family: var(--mulish);
  font-size: 14px;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 4px;
`;

const CenteredTextField = styled(TextField)({
  width: "100%",
  "& .MuiInputBase-input": {
    height: "13px",
    display: "flex",
    alignItems: "center",
  },
});

export {
  Container,
  Form,
  InputWrapper,
  InnerInputWrapper,
  FormLink,
  CenteredTextField,
};
