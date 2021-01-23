import { FC } from 'react';
import { ButtonBlock, ButtonLabel } from './elements';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = ({ label, onClick, type = 'button' }) => {
  return (
    <div className="default">
      <ButtonBlock type={type} onClick={onClick}>
        <ButtonLabel>{label} 9999</ButtonLabel>
      </ButtonBlock>
    </div>
  );
};

export default Button;
