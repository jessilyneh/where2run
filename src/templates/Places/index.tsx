import LinkWrapper from "components/LinkWrapper";
import { WindowClose } from "@styled-icons/fa-solid/WindowClose";
import * as S from "./styles";

type imageProps = {
  url: string;
  width: number;
  height: number;
};
export type PlaceTemplateProps = {
  place: {
    slug: string;
    name: string;
    description: {
      html: string;
    };
    gallery: imageProps[];
  };
};

export default function PlacesTemplate({ place }: PlaceTemplateProps) {
  return (
    <>
      <LinkWrapper href={"/"}>
        <WindowClose size={32} arial-label="initial page" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description.html }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <img key={`photo-${index}`} src={image.url} alt={place.name} />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
