import Image from "next/image";
import LinkWrapper from "components/LinkWrapper";
import { WindowClose } from "@styled-icons/fa-solid/WindowClose";
import * as S from "./styles";
import { useRouter } from "next/router";

type imageProps = {
  url: string;
  width: number;
  height: number;
};
export type PlaceTemplateProps = {
  place: {
    slug: string;
    name: string;
    description?: {
      html: string;
    };
    gallery: imageProps[];
  };
};

export default function PlacesTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <>
      <LinkWrapper href={"/"}>
        <WindowClose size={32} arial-label="initial page" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || "" }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
