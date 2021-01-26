/**
 * @see {@link https://www.w3.org/TR/css-color-4/#hex-notation}
 */

function checkHex(hex: string): boolean {
  return !!hex.match(
    /^#([\dA-Fa-f]{8}|[\dA-Fa-f]{6}|[\dA-Fa-f]{4}|[\dA-Fa-f]{3})$/
  );
}

export function HEXtoRGB(colorHex: string): false | RGBType {
  if (checkHex(colorHex)) {
    let red = 0;
    let green = 0;
    let blue = 0;
    let alpha = 255;

    const h = colorHex.slice(1);

    if (h.length === 6 || h.length === 8) {
      red = Number.parseInt(`${h[0]}${h[1]}`, 16);
      green = Number.parseInt(`${h[2]}${h[3]}`, 16);
      blue = Number.parseInt(`${h[4]}${h[5]}`, 16);
      if (h.length === 8) {
        alpha = Number.parseInt(`${h[6]}${h[7]}`, 16);
      }
    } else if (h.length === 3 || h.length === 4) {
      red = Number.parseInt(`${h[0]}${h[0]}`, 16);
      green = Number.parseInt(`${h[1]}${h[1]}`, 16);
      blue = Number.parseInt(`${h[2]}${h[2]}`, 16);
      if (h.length === 4) {
        alpha = Number.parseInt(`${h[3]}${h[3]}`, 16);
      }
    }

    console.log([red, green, blue, alpha]);

    return [red, green, blue, alpha];
  }
  return false;
}

/**
 * @see {@link https://www.rapidtables.com/convert/color/rgb-to-hsl.html}
 */
export type RGBType = [red: number, green: number, blue: number, alpha: number];

export function RGBtoHSL(RGB: RGBType): false | HSLType {
  const red = RGB[0] / 255;
  const green = RGB[1] / 255;
  const blue = RGB[2] / 255;
  const alpha = Number.parseFloat((RGB[3] / 255).toFixed(2));

  const cMin = Math.min(red, green, blue);
  const cMax = Math.max(red, green, blue);
  const delta = cMax - cMin;

  let hue: number;

  if (delta === 0) {
    hue = 0;
  } else if (cMax === red) {
    hue = ((green - blue) / delta) % 6;
  } else if (cMax === green) {
    hue = (blue - red) / delta + 2;
  } else {
    hue = (red - green) / delta + 4;
  }

  hue = Math.round(hue * 60);
  if (hue < 0) hue += 360;

  let lightness = (cMax + cMin) / 2;
  let saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));

  saturation = Math.round(saturation * 100);
  lightness = Math.round(lightness * 100);

  return [hue, saturation, lightness, alpha];
}

export type HSLType = [
  hue: number,
  saturation: number,
  lightness: number,
  alpha: number
];

export function HEXtoHSL(colorHex: string): false | HSLType {
  const RGB = HEXtoRGB(colorHex);
  if (RGB) {
    return RGBtoHSL(RGB);
  }
  return false;
}

export function HSLtoHeX(HSL: HSLType): string {
  const h = HSL[0];
  let s = HSL[1];
  let l = HSL[2];
  let a: string | number = HSL[3];

  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r: string | number = 0;
  let g: string | number = 0;
  let b: string | number = 0;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 300 && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  if (r.length === 1) r = `0${r}`;
  if (g.length === 1) g = `0${g}`;
  if (b.length === 1) b = `0${b}`;

  let hex = '';
  if (a === 1) {
    hex = `#${r}${g}${b}`;
  } else {
    a = Math.round(a * 255).toString(16);
    hex = `#${r}${g}${b}${a}`;
  }

  return hex.toUpperCase();
}
