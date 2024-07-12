import styled from "styled-components";
import notFound from "../../assets/images/not-found.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 26px 58px 0 58px;
  height: calc(100vh - 72px);
  min-height: calc(100vh - 72px);
  background-image: url(${notFound});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50% 80%;
`;
