import styled from 'styled-components';

export interface HueBox {
  backgroundSize: number;
  backgroundPosition: number;
  width?: number;
  color: string;
}

const HueBox = styled.div<HueBox>(
  ({ backgroundSize, backgroundPosition, width = 100, color }) => ({
    height: 30,
    width,
    borderRadius: 4,
    backgroundSize,
    backgroundPosition,
    position: 'relative',
    backgroundImage:
      'linear-gradient(to right, #FF0080, #FF0000, #FF8000, #FFFF00, #80FF00, #00FF00, #00FF80, #00FFFF, #0080FF, #0000FF, #8000FF, #FF00FF, #FF0080)',
    '::after': {
      content: '" "',
      position: 'absolute',
      width,
      top: 0,
      height: 26,
      backgroundColor: color,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      opacity: 0.8,
    },
  })
);

export default HueBox;
