import styled from 'styled-components';
import { HSL } from 'color-convert/conversions';

export interface Color {
  id: string;
  hex: string;
  hsl: HSL;
  token: string;
  elements: number;
}

interface ColorBoxProps {
  shade: Color;
}

const ColorBox = styled.div<ColorBoxProps>(({ shade }) => ({
  height: 30,
  width: '100%',
  borderRadius: 4,
  backgroundColor: `hsl(${shade.hsl[0]}deg ${shade.hsl[1]}% ${shade.hsl[2]}%)`,
  boxShadow: 'inset 0 0 0 1px #0000000d',
}));

export default ColorBox;
