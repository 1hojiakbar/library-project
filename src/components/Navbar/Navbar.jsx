import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import usr_avatar from "../../assets/icons/avatar.svg";
import notficationIcon from "../../assets/icons/notfication.svg";
import {
  Container,
  Logo,
  NavbarWrapper,
  SearchInput,
  SearchInputWrapper,
  Section,
  UserAvatarWrapper,
  Wrapper,
} from "./style";
import { InputAdornment } from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate("");
  return (
    <Container>
      <NavbarWrapper>
        <Section gap="24px">
          <Logo>
            <Logo.Image src={logo} alt="Logo not found" />
            <Logo.Title>
              <strong className="title">Book</strong> List
            </Logo.Title>
          </Logo>
          <SearchInputWrapper>
            <SearchInput
              variant="standard"
              placeholder="Search for any training you want"
              autoComplete="off"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchInputWrapper.SearchIcon
                      src={searchIcon}
                      alt="icon not found"
                    />
                  </InputAdornment>
                ),
              }}
            />
          </SearchInputWrapper>
        </Section>
        <Section>
          <UserAvatarWrapper>
            <UserAvatarWrapper.NotficationIcon
              src={notficationIcon}
              alt="notfication icon not found"
            />
            <UserAvatarWrapper.Image
              src={usr_avatar}
              alt="avatar not found"
              onClick={() => navigate("/signUp")}
            />
          </UserAvatarWrapper>
        </Section>
      </NavbarWrapper>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
