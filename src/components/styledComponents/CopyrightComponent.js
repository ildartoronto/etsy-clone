import styled from "styled-components";
import Texts from "../../redux/data/Texts.json";
import { COLORS } from "../global/constants";

const currentYear = new Date().getFullYear();
const fullText = Texts.copy1 + currentYear + Texts.copy2;

const CopyrightComponent = () => {
  return <CopyrightStyle>{fullText}</CopyrightStyle>;
};

const CopyrightStyle = styled.div`
  flex: 1 0 auto;
  color: ${COLORS.secondColor};
  background-color: ${COLORS.mainColor};
  width: 100%;
  text-transform: capitalize;
  text-align: center;
  padding: 20px auto;
  margin-top: auto;
  margin-bottom: 0;
  margin: auto 0 0;
`;

export default CopyrightComponent;