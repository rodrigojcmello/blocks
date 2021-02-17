import styled from 'styled-components';
import { HSL } from '../../../colors';

export interface Color {
  id: string;
  hex: string;
  hsl: HSL;
  token: string;
  elements: number;
  contrastColor: string;
}

interface ColorBoxProps {
  shade: Color;
}

const checkeredSize = 3;
const checkeredColor = '#bfbfbf';

const ColorBox = styled.div<ColorBoxProps>(({ shade }) => ({
  height: 30,
  width: '100%',
  borderRadius: 15,

  boxShadow: 'inset 0 0 0 1px #0000000d',
  position: 'relative',
  '&::before': {
    position: 'absolute',
    width: 30,
    height: 30,
    left: 0,
    top: 0,
    content: '" "',
    borderRadius: 15,
    display: 'block',
    backgroundImage: `linear-gradient(45deg, ${checkeredColor} 25%, transparent 25%), linear-gradient(-45deg, ${checkeredColor} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${checkeredColor} 75%), linear-gradient(-45deg, transparent 75%, ${checkeredColor} 75%)`,
    backgroundSize: `${checkeredSize * 2}px ${checkeredSize * 2}px`,
    backgroundPosition: `0 0, 0 ${checkeredSize}px, ${checkeredSize}px -${checkeredSize}px, -${checkeredSize}px 0px`,
  },
  '&::after': {
    content: '" "',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: shade.hex,
  },
}));

export default ColorBox;
