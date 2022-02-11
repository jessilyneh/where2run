import LinkWrapper from "components/LinkWrapper";
import { WindowClose } from "@styled-icons/fa-solid/WindowClose";
import * as S from "./styles";

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href={"/"}>
      <WindowClose size={32} />
    </LinkWrapper>
    <S.Heading>Where to run</S.Heading>
    <S.Body>
      <p>A guide to find places to run and tell your histories</p>
    </S.Body>
  </S.Content>
);
export default AboutTemplate;
