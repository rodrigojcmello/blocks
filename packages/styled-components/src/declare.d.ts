declare module 'color-to-name' {
  function findClosestColor(hex: string): { color: string; name: string };
}

declare module 'shader' {
  export default function (hex: string, radio: number): string;
}

declare module '*.png' {
  const imgPath: string;
  export default imgPath;
}
