import { TextField } from "@mui/material";
import styled, { css } from "styled-components";

const flex = css`
  display: flex;
`;

const Container = styled.div``;

const NavbarWrapper = styled.div`
  ${flex}
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  width: 100%;
  height: 72px;
  border-bottom: 0.8px solid #444;
`;

const Logo = styled.div`
  ${flex}
  align-items: center;
  column-gap: 12px;
`;

Logo.Image = styled.img`
  width: 36px;
  height: 36px;
`;

Logo.Title = styled.h1`
  color: var(--whiteColor);
  font-family: Mulish;
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 3.2%;
  text-align: left;
  .title {
    color: var(--purple);
    font-weight: 700;
    font-size: 18px;
  }
`;

const Section = styled.div`
  ${flex}
  align-items: center;
  gap: ${({ gap }) => gap && gap};
`;

const SearchInputWrapper = styled.div`
  ${flex}
  align-items: center;
  width: 300px;
  @media (max-width: 1240px) {
    width: 200px;
    row-gap: 20px;
  }
  @media (max-width: 880px) {
    width: 150px;
    row-gap: 20px;
  }
`;

SearchInputWrapper.SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 10px;
`;

const SearchInput = styled(TextField)({
  width: "100%",
  color: "#fff",
  "& .MuiInputBase-input": {
    display: "flex",
    alignItems: "center",
    height: "35px",
    color: "#fff",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#fff",
  },
});

const UserAvatarWrapper = styled.div`
  ${flex}
  align-items: center;
  column-gap: 14px;
  cursor: pointer;
`;

UserAvatarWrapper.Image = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 3px solid #884cb2;
`;

UserAvatarWrapper.NotficationIcon = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const Wrapper = styled.div``;

export {
  Container,
  Wrapper,
  NavbarWrapper,
  Logo,
  Section,
  SearchInput,
  SearchInputWrapper,
  UserAvatarWrapper,
};
