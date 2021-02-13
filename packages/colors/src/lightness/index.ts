import { convertHexToHsl } from '../hex';
import { convertHslToHex } from '../hsl';

function getLightnessRadio(
  lightness = 55,
  range = 5,
  lighter = 5,
  darker = 95
) {
  const y = [];
  const lightRange = (lightness - lighter) / range;
  for (let i = lighter; i < lightness; i += lightRange) {
    y.push(Math.round(i));
  }
  const darkRange = (darker - lightness) / range;
  for (let i = lightness; i <= darker + 0.99; i += darkRange) {
    y.push(Math.round(i));
  }
  return y;
}

function getLightnessColor(hex: string) {
  const hsl = convertHexToHsl(hex);
  if (hsl) {
    const lightness = hsl[2];
    const shader = getLightnessRadio(lightness)
      .map((value): string | false => {
        const x = hsl;
        x[2] = value;
        return convertHslToHex(x);
      })
      .filter(Boolean);
  }
}
