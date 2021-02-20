import styled from 'styled-components';
import { ChangeEventHandler, FC, InputHTMLAttributes, useState } from 'react';

const HashFieldContainer = styled.div({
  height: 30,
  borderRadius: 4,
  backgroundColor: '#F7F7F7',
  boxSizing: 'border-box',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '28px 1fr',
  border: '1px solid #F0F0F0',
  '&.focus': {
    backgroundColor: '#E5F4FF',
    borderColor: '#D1EBFF',
  },
});

const Icon = styled.div({
  height: 28,
  backgroundColor: '#FFFFFF',
  borderRadius: 4,
  textAlign: 'center',
  lineHeight: '28px',
  fontSize: 12,
  color: '#9A9A9A',
});

const Input = styled.input({
  width: '100%',
  background: 'none',
  border: 'none',
  outline: 'none',
  textAlign: 'center',
  padding: 0,
  color: '#333333',
  '&[type=number]': {
    '-moz-appearance': 'textfield',
  },
  '&::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
  '&::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
});

interface HashFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  character: string;
}

const IconText: FC<HashFieldProps> = ({
  value,
  onChange,
  character,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <HashFieldContainer className={focus ? 'focus' : ''}>
      <Icon>{character}</Icon>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        {...rest}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      />
    </HashFieldContainer>
  );
};

export default IconText;
