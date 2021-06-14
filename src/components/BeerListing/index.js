import React, { useEffect, useState } from "react";
import axios from "axios";
import useBeers from "../../hooks/useBeers";
import styled from "styled-components";
import BeerCard from "../BeerCard";
import { useRouter } from "next/router";

const Container = styled.div`
  max-width: 780px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

const StyledBeerCard = styled(BeerCard)`
  width: 50%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const BeerListing = (props) => {
  const { beers, error, loading } = useBeers();
  const router = useRouter();
  return (
    <Container>
      {error && <div>{error}</div>}
      {loading && <div>Loading</div>}
      {!error &&
        !loading &&
        beers.map(({ name, tagline, image_url, id }) => (
          <StyledBeerCard
            {...{ name, tagline, image_url }}
            onClick={() => router.push(`/${id}`, undefined, { shallow: true })}
          />
        ))}
    </Container>
  );
};

export default BeerListing;
