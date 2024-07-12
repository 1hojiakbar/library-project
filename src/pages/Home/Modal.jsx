import * as React from "react";
import Box from "@mui/material/Box";
import { InputAdornment, Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import linkIcon from "../../assets/icons/link.svg";
import ModalContext from "../../context/ModalContext";
import Button from "../../components/Generic/Button/Button";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { InnerInputWrapper, InputWrapper } from "../SignUp/style";
import { SearchInput, SearchInputWrapper } from "../../components/Navbar/style";
import { ISBNInput } from "./style";

const HomeModal = () => {
  const { open, openModal } = React.useContext(ModalContext);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: "12px",
    boxShadow: " 0px 4px 32px 0px rgba(51, 51, 51, 0.04)",
    background: "rgb(254, 254, 254)",

    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create a book
            </Typography>
            <HighlightOffIcon
              sx={{ cursor: "pointer" }}
              onClick={() => openModal(false)}
            />
          </Stack>
          <InnerInputWrapper
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              my: "28px",
            }}
          >
            <InputWrapper.Label>ISBN</InputWrapper.Label>
            <ISBNInput
              variant="outlined"
              placeholder="--------------"
              autoComplete="off"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchInputWrapper.SearchIcon
                      src={linkIcon}
                      alt="icon not found"
                    />
                  </InputAdornment>
                ),
              }}
            />
          </InnerInputWrapper>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"12px"}
          >
            <Button type="outlined" onClick={() => openModal(false)}>
              Close
            </Button>
            <Button type="primary">Add</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default HomeModal;
