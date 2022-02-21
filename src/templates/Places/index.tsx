import { NextSeo } from "next-seo";
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
      text: string;
    };
    gallery: imageProps[];
  };
};

export default function PlacesTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <>
      <NextSeo
        title={`${place.name} -Where2Run`}
        description={
          place.description?.text ||
          "A guide to find places to run and tell your histories"
        }
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.canonical.ie/",
          title: `${place.name} -Where2Run`,
          description:
            place.description?.text ||
            "A guide to find places to run and tell your histories",
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`,
            },
          ],
        }}
      />
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
