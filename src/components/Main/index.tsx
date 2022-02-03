import * as S from "./styles";

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/3Logos.svg"
      alt="circulo preenchido da cor preta com a letra N sem serifa vasada, depois um emoji de unha pintada, dentro de um sinal de maior e menor, por ultimo, o simbolo de atomo em azul, com fundo preto, dentro de uma forma redonda"
    />
    <S.Title>Boilerplate</S.Title>
    <S.Description>
      Typescript, React.js, Next.js and Styled Components
    </S.Description>
    <S.Illustration
      src="/img/pusheen.svg"
      alt="desenho de gatinho cinza com vergonha, com as patinhas em direção as bochechas"
    />
  </S.Wrapper>
);
export default Main;
