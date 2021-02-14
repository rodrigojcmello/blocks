import { convertHexToHsl } from '../hex';
import { convertHslToHex } from '../hsl';

function getLightnessRadio(
  lightness = 55,
  range = 5,
  lighter = 5,
  darker = 95
) {
  const scale = [];
  const lightRange = (lightness - lighter) / range;
  for (let i = lighter; Math.round(i) < lightness; i += lightRange) {
    scale.push(Math.round(i));
  }
  const darkRange = (darker - lightness) / range;
  for (let i = lightness; Math.round(i) <= darker + 1; i += darkRange) {
    scale.push(Math.round(i));
  }
  return scale.reverse();
}

export function getLightnessColor(hex: string): false | string[] {
  const hsl = convertHexToHsl(hex);
  if (hsl) {
    const originalLightness = hsl[2];
    return getLightnessRadio(originalLightness)
      .map((lightness): string | false => {
        const newHsl = hsl;
        newHsl[2] = lightness;
        return convertHslToHex(newHsl);
      })
      .filter(Boolean) as string[];
  }
  return false;
}
