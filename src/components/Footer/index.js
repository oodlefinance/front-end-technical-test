import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
`;

const TextContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <Container>
      <hr />
      <TextContainer>powered by Punkapi.com/v2</TextContainer>
    </Container>
  );
};

export default Footer;
