import styled, { CSSObject } from 'styled-components';

export interface Color {
  hex: string;
  hsl: number[];
  token: string;
  elements: number;
}

const textBase: CSSObject = {
  height: 30,
  borderRadius: 4,
  backgroundColor: '#F7F7F7',
  boxSizing: 'border-box',
  width: '100%',
  border: '1px solid #F0F0F0',
  '&.focus, &:focus': {
    backgroundColor: '#E5F4FF',
    borderColor: '#D1EBFF',
  },
};

const SimpleText = styled.input({
  ...textBase,
  outline: 'none',
  paddingLeft: 12,
  paddingRight: 12,
});

export default SimpleText;
