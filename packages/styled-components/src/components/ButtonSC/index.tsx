import { FC } from 'react';
import { ButtonBlock, ButtonLabel } from './elements';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = ({ label, onClick, type = 'button' }) => {
  return (
    <ButtonBlock type={type} onClick={onClick}>
      <ButtonLabel>{label} 9999</ButtonLabel>
    </ButtonBlock>
  );
};

export default Button;
