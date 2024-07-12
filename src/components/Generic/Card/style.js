import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";

export const CardWrapper = styled(Card)({
  padding: "5px",
  "&:hover .icon-wrapper": {
    display: "flex",
  },
});

export const ChangeMenuWrapper = styled(Box)({
  position: "absolute",
  top: "0",
  right: "0",
  border: "none",
});

export const IconWrapper = styled("div")({
  display: "none",
  position: "absolute",
  right: 0,
  top: 0,
  flexDirection: "row",
});
