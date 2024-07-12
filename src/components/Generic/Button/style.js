import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "primary":
      return {
        background: "rgb(98, 0, 238)",
        color: "var(--whiteColor)",
      };
    case "outlined":
      return {
        background: "transparent",
        color: "rgb(98, 0, 238)",
        border: "1px solid rgb(98, 0, 238)",
      };

    default:
      return {
        background: "transparent",
        color: "rgb(98, 0, 238)",
      };
  }
};

export const GenericButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: var(--mulish);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0;
  text-align: center;
  column-gap: ${({ xgap }) => xgap && xgap};
  row-gap: ${({ ygap }) => ygap && ygap};
  width: ${({ w }) => (w ? w : "100%")};
  height: ${({ h }) => (h ? h : "40px")};
  margin-top: ${({ mt }) => (mt ? mt : "0")};
  margin-right: ${({ mr }) => (mr ? mr : "0")};
  margin-bottom: ${({ mb }) => (mb ? mb : "0")};
  margin-left: ${({ ml }) => (ml ? ml : "0")};
  border: none;
  border-radius: 4px;
  ${getType}
`;
