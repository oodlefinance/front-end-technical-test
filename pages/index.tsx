import styled from "styled-components";
import Button from "../components/Button";

const Title = styled.h1`
  font-size: 50px;
  color: ${(p) => p.theme.colors.primary};
  text-align: center;
`;

const PageWrapper = styled.div`
  margin: 0 2rem;
`;

const DarkWrapper = styled.div`
  padding: 2rem;
  margin: 2rem 0;
  background-color: ${(p) => p.theme.colors.background.dark};
  display: flex;
  gap: 1rem;
  border-radius: 5px;
`;

const LightWrapper = styled.div`
  padding: 2rem;
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
  border-radius: 5px;
  border: 3px dashed ${(p) => p.theme.colors.background.dark};
`;

export default function Home() {
  return (
    <PageWrapper>
      <Title>My awesome button demo page</Title>
      <LightWrapper>
        <Button confetti>Primary</Button>
        <Button confetti variant="secondary">
          Secondary
        </Button>
      </LightWrapper>
      <DarkWrapper>
        <Button confetti colorContext="dark">
          Primary on dark
        </Button>
        <Button confetti variant="secondary" colorContext="dark">
          Secondary on dark
        </Button>
      </DarkWrapper>
    </PageWrapper>
  );
}
