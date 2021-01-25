import styled from 'styled-components';
import { ChangeEventHandler, FC } from 'react';
import hashIcon from './assets/simple-small/hashtag.png';

const HashFieldContainer = styled.div({
  height: 30,
  borderRadius: 4,
  border: 'none',
  backgroundColor: '#F7F7F7',
  boxSizing: 'border-box',
  width: '100%',
  display: 'flex',
});

const HashIcon = styled.img({
  width: 16,
  height: 16,
  padding: 7,
});

const Input = styled.input({
  width: '100%',
  background: 'none',
  border: 'none',
  outline: 'none',
  textAlign: 'center',
});

interface HashFieldProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const HashField: FC<HashFieldProps> = ({ value, onChange }) => {
  return (
    <HashFieldContainer>
      <HashIcon alt="hash icon" src={hashIcon} />
      <Input type="text" value={value} onChange={onChange} />
    </HashFieldContainer>
  );
};

export default HashField;
