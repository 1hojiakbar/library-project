import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Button from "../../components/Generic/Button/Button";
import RegisterContext from "../../context/RegisterContext";
import {
  CenteredTextField,
  Container,
  Form,
  FormLink,
  InnerInputWrapper,
  InputWrapper,
} from "./style";

const SignUp = () => {
  const navigate = useNavigate();
  const { defValue, onChange } = useContext(RegisterContext);
  const [status, setStatus] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [data, setData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const reg = /[1234567]/gi;
    let isValid = true;

    if (data.username.length === 0) {
      setStatus((prevState) => ({ ...prevState, username: "error" }));
      isValid = false;
    } else {
      setStatus((prevState) => ({ ...prevState, username: "success" }));
    }

    if (data.password !== data.confirmPassword) {
      setStatus((prevState) => ({
        ...prevState,
        password: "error",
        confirmPassword: "error",
      }));
      isValid = false;
    } else {
      if (reg.test(data.password) && reg.test(data.confirmPassword)) {
        setStatus((prevState) => ({
          ...prevState,
          password: "success",
          confirmPassword: "success",
        }));
      } else {
        setStatus((prevState) => ({
          ...prevState,
          password: "error",
          confirmPassword: "error",
        }));
        isValid = false;
      }
    }

    if (isValid) {
      onChange(true);
      localStorage.setItem("userData", JSON.stringify(data));
    }
  };

  useEffect(() => {
    if (defValue === true) {
      navigate("/home");
    }
  }, [defValue]);

  return (
    <Container>
      <Form autoComplete="off">
        <Form.Title>Sign Up</Form.Title>
        <InputWrapper>
          <InnerInputWrapper
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <InputWrapper.Label>Username</InputWrapper.Label>
            <CenteredTextField
              value={data.username}
              error={status.username === "error"}
              onChange={({ target }) =>
                setData({ ...data, username: target.value })
              }
              variant="outlined"
              placeholder="Enter your username"
              autoComplete="off"
            />
          </InnerInputWrapper>
          <InnerInputWrapper
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <InputWrapper.Label>Password</InputWrapper.Label>
            <CenteredTextField
              value={data.password}
              error={status.password === "error"}
              onChange={({ target }) =>
                setData({ ...data, password: target.value })
              }
              variant="outlined"
              placeholder="Enter your password"
              autoComplete="off"
            />
          </InnerInputWrapper>
          <InnerInputWrapper
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <InputWrapper.Label>Confirm password</InputWrapper.Label>
            <CenteredTextField
              value={data.confirmPassword}
              error={status.confirmPassword === "error"}
              onChange={({ target }) =>
                setData({ ...data, confirmPassword: target.value })
              }
              variant="outlined"
              placeholder="Enter your confirm password"
              autoComplete="off"
            />
          </InnerInputWrapper>
          <Button type="primary" mt="36px" onClick={(e) => onSubmit(e)}>
            Submit
          </Button>
          <Form.SubTitle>
            Already signed up?
            <FormLink to={"/signIn"}>Go to sign in.</FormLink>
          </Form.SubTitle>
        </InputWrapper>
      </Form>
    </Container>
  );
};

export default SignUp;
