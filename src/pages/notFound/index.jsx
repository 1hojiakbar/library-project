import { Container } from "./style";
import { Stack } from "@mui/material";
import Button from "../../components/Generic/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate("");
  const location = useLocation();

  return (
    <Container>
      <Stack
        width={"100%"}
        height={"100vh"}
        direction={"column"}
        alignItems={"center"}
        gap={"20px"}
        justifyContent={"center"}
      >
        <Stack
          mt={"27rem"}
          width={"50%"}
          direction={"row"}
          alignItems={"center"}
          gap={"20px"}
          justifyContent={"center"}
        >
          <Button type="outlined" onClick={() => navigate("/")}>
            Go Home Page
          </Button>
          <Button type="primary" onClick={() => navigate(location.pathname)}>
            Go Home Page
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default NotFound;
