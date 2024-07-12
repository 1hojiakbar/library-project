import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  gap: 7px;
`;

export const DeleteIcon = styled.img`
  padding: 10px 10px;
  background: ${({ bg }) => bg === "delete" && "red"};
  border-radius: 5px 0px 0 5px;
  cursor: pointer;
`;

export const EditIcon = styled.img`
  padding: 10px 10px;
  background: ${({ bg }) => bg === "edit" && "blue"};
  border-radius: 5px 0px 0 5px;
  cursor: pointer;
`;
