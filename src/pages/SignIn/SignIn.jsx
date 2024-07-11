import Button from "../../components/Generic/Button/Button";
import {
  CenteredTextField,
  Container,
  Form,
  FormLink,
  InnerInputWrapper,
  InputWrapper,
} from "../SignUp/style";

const SignIn = () => {
  return (
    <Container>
      <Form>
        <Form.Title>Sign In</Form.Title>
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
              variant="outlined"
              placeholder="Enter your username"
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
              variant="outlined"
              placeholder="Repeat the password"
            />
          </InnerInputWrapper>
          <Button type="primary" mt="36px">
            Submit
          </Button>
          <Form.SubTitle>
            Already signed up?
            <FormLink to={"/"}>Back to sign up.</FormLink>
          </Form.SubTitle>
        </InputWrapper>
      </Form>
    </Container>
  );
};

export default SignIn;
