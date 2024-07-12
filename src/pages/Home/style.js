import { TextField } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 26px 58px 0 58px;
  height: calc(100vh - 72px);
  min-height: calc(100vh - 72px);
`;

const HomeTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

Container.Title = styled.h1`
  color: var(--whiteColor);
  font-family: var(--mulish);
  font-size: 36px;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 6px;
  .title {
    color: var(--purple);
    font-weight: 700;
    font-size: 36px;
    font-family: var(--mulish);
  }
`;

Container.SubTitle = styled.p`
  color: var(--whiteColor);
  font-family: var(--mulish);
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
`;

const BookCardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 20px;
  width: 100%;
  padding-top: 26px;
`;

const ISBNInput = styled(TextField)({
  width: "100%",
  color: "#000",
  "& .MuiInputBase-input": {
    display: "flex",
    alignItems: "center",
    height: "15px",
    color: "#000",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#000",
  },
});

export { Container, BookCardWrapper, HomeTitleWrapper, ISBNInput };
