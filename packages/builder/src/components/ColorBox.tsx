import styled from 'styled-components';
import { HSLType } from '../../../util/color';

export interface Color {
  id: string;
  hex: string;
  hsl: HSLType;
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

  boxShadow: 'inset 0 0 0 1px #0000000d',
  position: 'relative',
  '&::before': {
    position: 'absolute',
    width: 30,
    height: 30,
    left: 0,
    top: 0,
    content: '" "',
    display: 'block',
    backgroundImage:
      'linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%)',
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
  },
  '&::after': {
    content: '" "',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    backgroundColor: shade.hex,
  },
}));

export default ColorBox;
