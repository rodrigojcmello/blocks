import { ReactElement } from 'react';
import style9 from 'style9';

// Styles are created by calling style9.create
const styles = style9.create({
  blue: {
    color: 'white',
    backgroundColor: 'green',
  },
});

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

function Button({
  label,
  onClick,
  type = 'button',
}: ButtonProps): ReactElement {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={onClick} className={styles('blue')}>
      {label}
    </button>
  );
}

export default Button;
