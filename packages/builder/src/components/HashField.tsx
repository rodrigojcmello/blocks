import styled from 'styled-components';
import { ChangeEventHandler, FC, InputHTMLAttributes } from 'react';

const HashFieldContainer = styled.div({
  height: 30,
  borderRadius: 4,
  backgroundColor: '#F7F7F7',
  boxSizing: 'border-box',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '28px 1fr',
  border: '1px solid #F0F0F0',
});

const Character = styled.div({
  height: 28,
  backgroundColor: '#FFFFFF',
  borderRadius: 4,
  textAlign: 'center',
  lineHeight: '28px',
  fontFamily: "'Titillium Web', sans-serif",
  fontSize: 14,
  color: '#333333',
});

const Input = styled.input({
  width: '100%',
  background: 'none',
  border: 'none',
  outline: 'none',
  textAlign: 'center',
  marginRight: 8,
  color: '#333333',
  fontFamily: "'Titillium Web', sans-serif",
});

interface HashFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  character: string;
}

const HashField: FC<HashFieldProps> = ({
  value,
  onChange,
  character,
  ...rest
}) => {
  return (
    <HashFieldContainer>
      <Character>{character}</Character>
      <Input type="text" value={value} onChange={onChange} {...rest} />
    </HashFieldContainer>
  );
};

export default HashField;
