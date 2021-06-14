import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
`;

const CardContent = styled.div`
  display: flex;
  padding: 10px 30px;
  border: 1px solid lightGrey;
  border-radius: 5px;
  padding-left: 0px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  max-width: 100px;
  margin-right: 10px;
`;

const Image = styled.div`
  width: 100px;
  height: 100px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  > div:last-child {
    padding-top: 15px;
  }
`;

const BeerCard = ({ name, image_url, tagline, ...props }) => {
  return (
    <Container {...props}>
      <CardContent>
        <ImageContainer>
          <Image image={image_url} />
        </ImageContainer>
        <TextContainer>
          <div style={{ fontWeight: "bold" }}>{name}</div>
          <div>{tagline}</div>
        </TextContainer>
      </CardContent>
    </Container>
  );
};

export default BeerCard;
