import dynamic from "next/dynamic";
import LinkWrapper from "components/LinkWrapper";
import { InfoCircle } from "@styled-icons/fa-solid/InfoCircle";
import { MapProps } from "components/Map";

const Map = dynamic(() => import("components/Map"), { ssr: false });

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <LinkWrapper href={"/about"}>
        <InfoCircle size={32} arial-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
