import { useContext } from "react";
import editIcon from "../../../assets/icons/pen.svg";
import BookContext from "../../../context/BookContext";
import trashIcon from "../../../assets/icons/trash.svg";
import { Container, DeleteIcon, EditIcon } from "./menuStyle";

const ChangeMenu = ({ id }) => {
  const { data, onDelete } = useContext(BookContext);
  return (
    <Container>
      <DeleteIcon src={trashIcon} bg="delete" onClick={() => onDelete(id)} />
      <EditIcon src={editIcon} bg="edit" />
    </Container>
  );
};

export default ChangeMenu;
