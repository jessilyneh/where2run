import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import LinkWrapper from "components/LinkWrapper";
import { InfoCircle } from "@styled-icons/fa-solid/InfoCircle";
import { MapProps } from "components/Map";

const Map = dynamic(() => import("components/Map"), { ssr: false });

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Where to Run"
        description="A guide to find places to run and tell your histories"
        canonical="https://where2run.vercel.app/"
        openGraph={{
          url: "https://where2run.vercel.app/",
          title: "Where to Run",
          description: "A guide to find places to run and tell your histories",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "Where to Run",
        }}
      />
      <LinkWrapper href={"/about"}>
        <InfoCircle size={32} arial-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
