import { FC } from 'react';
import styled from 'styled-components';

export const ButtonBlockStyled = styled.button((props) => {
  console.log({ props });
  return {
    color: '#d0a967',
    backgroundColor: `var(--${props.theme.components.button.block.backgroundColor[0].light})`,
    borderWidth: 0,
    padding: 10,
  };
});

interface ButtonBlockProps {
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const ButtonBlock: FC<ButtonBlockProps> = ({
  onClick,
  type = 'button',
  children,
}) => {
  return (
    <ButtonBlockStyled type={type} onClick={onClick}>
      {children}
    </ButtonBlockStyled>
  );
};

export const ButtonLabel = styled.span({
  color: '#d0a967',
});
