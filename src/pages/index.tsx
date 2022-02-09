import dynamic from "next/dynamic";

const Map = dynamic(() => import("components/Map"), { ssr: false });

export default function Home() {
  return (
    <Map
      places={[
        {
          id: "1",
          name: "São Paulo",
          slug: "são paulo",
          location: {
            latitude: -23.5489,
            longitude: -46.6388,
          },
        },
      ]}
    />
  );
}
