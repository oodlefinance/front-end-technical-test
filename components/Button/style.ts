import styled from "styled-components";
import theme from "../../theme";

export type Variant = "primary" | "secondary";
export type ColorContext = "light" | "dark";

export type StyledButtonProps = {
  variant: Variant;
  colorContext: ColorContext;
};

const COLORS: Record<
  Variant,
  Record<ColorContext, Record<"color" | "backgroundColor", string>>
> = {
  primary: {
    light: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,
    },
    dark: {
      backgroundColor: theme.colors.white,
      color: theme.colors.primary,
    },
  },
  secondary: {
    light: {
      backgroundColor: theme.colors.secondary,
      color: theme.colors.white,
    },
    dark: {
      backgroundColor: theme.colors.white,
      color: theme.colors.secondary,
    },
  },
};

export const StyledButton = styled.button<StyledButtonProps>`
  transition: filter 300ms;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(p) => COLORS[p.variant][p.colorContext].backgroundColor};
  color: ${(p) => COLORS[p.variant][p.colorContext].color};
  padding: 1rem;
  border-image: none;
  border-style: unset;
  font-size: 1rem;
  font-weight: ${(p) => p.colorContext === "dark" && "bold"};

  :active {
    filter: brightness(0.8);
  }
`;
