import addConfetti from "./addConfetti";
import { StyledButton, StyledButtonProps } from "./style";

type Props = Partial<StyledButtonProps> & {
  confetti?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  id?: string;
};

const Button = ({
  onClick,
  confetti,
  children,
  id,
  variant = "primary",
  colorContext = "light",
}: Props) => {
  const clickHandler = onClick ?? (confetti ? addConfetti : undefined);

  return (
    <StyledButton
      id={id}
      onClick={clickHandler}
      variant={variant}
      colorContext={colorContext}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
