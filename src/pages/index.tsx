import dynamic from "next/dynamic";
import LinkWrapper from "components/LinkWrapper";
import { InfoCircle } from "@styled-icons/fa-solid/InfoCircle";

const Map = dynamic(() => import("components/Map"), { ssr: false });

export default function Home() {
  return (
    <>
      <LinkWrapper href={"/about"}>
        <InfoCircle size={32} arial-label="about" />
      </LinkWrapper>
      <Map />
    </>
  );
}
