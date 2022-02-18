import styled from "styled-components";

export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
`;

export const Container = styled.section`
  max-width: var(--container);
  margin: auto;
`;

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--medium);
`;

export const Body = styled.div`
  margin-bottom: var(--large);

  p {
    margin-bottom: var(--medium);
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-gap: var(--medium);
`;
