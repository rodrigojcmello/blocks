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
  border: '1px solid #F0F0F0',
  backgroundColor: '#F7F7F7',
  outline: 'none',
  color: '#333333',
  boxSizing: 'border-box',
  width: '100%',
  textAlign,
}));

export default TextField;
