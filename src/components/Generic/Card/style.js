import { styled } from "@mui/system";
import Card from "@mui/material/Card";

export const CardWrapper = styled(Card)({
  padding: "5px",
  "&:hover .icon-wrapper": {
    display: "flex",
  },
});

export const IconWrapper = styled("div")({
  display: "none",
  position: "absolute",
  right: 0,
  top: 0,
  flexDirection: "row",
});
