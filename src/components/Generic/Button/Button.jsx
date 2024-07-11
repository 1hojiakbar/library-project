import { GenericButton } from "./style";

const Button = ({ children, ...prop }) => (
  <GenericButton {...prop}>{children}</GenericButton>
);

export default Button;
