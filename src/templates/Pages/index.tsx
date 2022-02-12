import LinkWrapper from "components/LinkWrapper";
import { WindowClose } from "@styled-icons/fa-solid/WindowClose";
import * as S from "./styles";

export type PageTemplateProps = {
  heading: string;
  body: string;
};

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <LinkWrapper href={"/"}>
      <WindowClose size={32} />
    </LinkWrapper>
    <S.Heading>{heading}</S.Heading>
    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </S.Body>
  </S.Content>
);

export default PageTemplate;
