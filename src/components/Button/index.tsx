import { ReactElement } from 'react';
import style9 from 'style9-dynamic-value';
import { createGlobalStyle } from 'styled-components';
import wwwww from '../../json/windows-10-fluent';

const x = wwwww?.button?.accent?.block?.base?.borderRadius;

const z = {
  block: {
    color: '#d0a967',
    backgroundColor: 'var(--primary)',
    borderWidth: 0,
    padding: 10,
  },
};

const styles = style9.create(z);

const themes = {
  '.facebook': { '--primary': 'green' },
  '.google': { '--primary': 'red' },
};

const GlobalStyle = createGlobalStyle(themes);

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
    <div className="google">
      <GlobalStyle />
      <button type={type} onClick={onClick} className={styles('block')}>
        {label} 123
      </button>
    </div>
  );
}

export default Button;
