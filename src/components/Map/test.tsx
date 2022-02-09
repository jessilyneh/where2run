import { render, screen } from "@testing-library/react";
import Map from ".";

describe("<Map />", () => {
  it("should render whithout any pin marker", () => {
    render(<Map />);

    //   screen.logTestingPlaygroundURL();
    expect(
      screen.getByRole("link", {
        name: /a js library for interactive maps/i,
      })
    ).toBeInTheDocument();
  });

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  it("should render with the marker in the correct place", () => {
    const place = {
      id: "1",
      name: "São Paulo",
      slug: "são paulo",
      location: {
        latitude: -23.5489,
        longitude: -46.6388,
      },
    };

    const placeTwo = {
      id: "2",
      name: "Minas Gerais",
      slug: "minas gerais",
      location: {
        latitude: -19.8157,
        longitude: -43.9542,
      },
    };
    render(<Map places={[place, placeTwo]} />);

    expect(screen.getByTitle(/são paulo/i)).toBeInTheDocument();
    expect(screen.getByTitle(/minas gerais/i)).toBeInTheDocument();
  });
});
