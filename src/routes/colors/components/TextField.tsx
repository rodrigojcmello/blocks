import styled from 'styled-components';
import { Property } from 'csstype';

export interface Color {
  hex: string;
  hsl: number[];
  token: string;
  elements: number;
}

interface TextFieldProps {
  textAlign: Property.TextAlign;
}

const TextField = styled.input<TextFieldProps>(({ textAlign }) => ({
  height: 30,
  borderRadius: 4,
  border: 'none',
  backgroundColor: '#F7F7F7',
  outline: 'none',
  // padding: '0 18px',
  boxSizing: 'border-box',
  width: '100%',
  textAlign,
}));

export default TextField;
