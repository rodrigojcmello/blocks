// import pantone from './origin/pantone/pantone';
// import html from './origin/html/html';

/**
 * @see {@link https://www.w3.org/TR/css-color-4/#hex-notation}
 */

function checkHex(hex: string): boolean {
  return !!hex.match(
    /^#([\dA-Fa-f]{8}|[\dA-Fa-f]{6}|[\dA-Fa-f]{4}|[\dA-Fa-f]{3})$/
  );
}

export function HEXtoRGB(HEX: string): false | RGBType {
  if (checkHex(HEX)) {
    let R = 0;
    let G = 0;
    let B = 0;
    let A = 1;

    const h = HEX.slice(1);

    if (h.length === 6 || h.length === 8) {
      R = Number.parseInt(`${h[0]}${h[1]}`, 16);
      G = Number.parseInt(`${h[2]}${h[3]}`, 16);
      B = Number.parseInt(`${h[4]}${h[5]}`, 16);
      if (h.length === 8) {
        A = Number.parseInt(`${h[6]}${h[7]}`, 16);
      }
    } else if (h.length === 3 || h.length === 4) {
      R = Number.parseInt(`${h[0]}${h[0]}`, 16);
      G = Number.parseInt(`${h[1]}${h[1]}`, 16);
      B = Number.parseInt(`${h[2]}${h[2]}`, 16);
      if (h.length === 4) {
        A = Number.parseInt(`${h[3]}${h[3]}`, 16);
      }
    }

    return [R, G, B, A];
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
  const alpha = RGB[3];

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

export function HEXtoHSL(colorHex: string): HSLType | false {
  const RGB = HEXtoRGB(colorHex);
  if (RGB) {
    return RGBtoHSL(RGB);
  }
  return false;
}

export function checkHSL(HSL: HSLType): boolean {
  const hue = HSL[0];
  const saturation = HSL[1];
  const lightness = HSL[2];
  const alpha = HSL[3];
  return (
    hue >= 0 &&
    hue <= 360 &&
    saturation >= 0 &&
    saturation <= 100 &&
    lightness >= 0 &&
    lightness <= 100 &&
    alpha >= 0 &&
    alpha <= 1
  );
}

export function HSLtoRGB(HSL: HSLType): RGBType | false {
  if (checkHSL(HSL)) {
    const h = HSL[0];
    let s = HSL[1];
    let l = HSL[2];
    const A = HSL[3];

    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    let R = 0;
    let G = 0;
    let B = 0;

    if (h >= 0 && h < 60) {
      R = c;
      G = x;
      B = 0;
    } else if (h >= 60 && h < 120) {
      R = x;
      G = c;
      B = 0;
    } else if (h >= 120 && h < 180) {
      R = 0;
      G = c;
      B = x;
    } else if (h >= 180 && h < 240) {
      R = 0;
      G = x;
      B = c;
    } else if (h >= 240 && h < 300) {
      R = x;
      G = 0;
      B = c;
    } else if (h >= 300 && h < 360) {
      R = c;
      G = 0;
      B = x;
    }

    R = Math.round((R + m) * 255);
    G = Math.round((G + m) * 255);
    B = Math.round((B + m) * 255);

    return [R, G, B, A];
  }
  return false;
}

export function HSLtoHeX(HSL: HSLType): string | false {
  const RGB = HSLtoRGB(HSL);

  if (RGB) {
    let r = RGB[0].toString(16);
    let g = RGB[1].toString(16);
    let b = RGB[2].toString(16);
    const a = (RGB[3] === 1 ? '' : Math.round(RGB[3] * 255)).toString(16);

    if (r.length === 1) r = `0${r}`;
    if (g.length === 1) g = `0${g}`;
    if (b.length === 1) b = `0${b}`;

    return `#${r}${g}${b}${a}`.toUpperCase();
  }
  return false;
}

// export function colorName(HEX: string): string | false {
//   const RGB = HEXtoRGB(HEX);
//   if (RGB) {
//     const match = [];
//     pantone.forEach((p) => {
//       const radio = 20;
//       if (
//         p.rgb[0] >= RGB[0] - radio &&
//         p.rgb[0] <= RGB[0] + radio &&
//         p.rgb[1] >= RGB[1] - radio &&
//         p.rgb[1] <= RGB[1] + radio &&
//         p.rgb[2] >= RGB[2] - radio &&
//         p.rgb[2] <= RGB[2] + radio
//       ) {
//         match.push(p);
//       }
//     });
//
//     // console.log({ match });
//     return match;
//   }
//   return false;
// }

// /**
//  * @see {@link https://en.wikipedia.org/wiki/Color_difference}
//  * @param HEX
//  */
// export function colorName(HEX: string): any {
//   const RGB1 = HEXtoRGB(HEX);
//   if (RGB1) {
//     const R1 = RGB1[0];
//     const G1 = RGB1[1];
//     const B1 = RGB1[2];
//
//     const c = {
//       distance: Number.POSITIVE_INFINITY,
//       color: undefined,
//     };
//
//     [...pantone, ...html].forEach((color) => {
//       const RGB2 = HEXtoRGB(color.hex);
//       if (RGB2) {
//         const R2 = RGB2[0];
//         const G2 = RGB2[1];
//         const B2 = RGB2[2];
//
//         const distance = Math.sqrt(
//           (R1 - R2) ** 2 + (G1 - G2) ** 2 + (B1 - B2) ** 2
//         );
//
//         if (distance < c.distance) {
//           c.distance = distance;
//           c.color = color;
//         }
//       }
//     });
//
//     return c;
//   }
//   return false;
// }
