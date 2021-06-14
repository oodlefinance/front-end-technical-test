import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

const Header = () => {
  return (
    <>
      <Title>Punk API</Title>
      <hr />
    </>
  );
};

export default Header;
