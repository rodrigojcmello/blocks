declare module 'shader' {
  export default function (hex: string, radio: number): string;
}

declare module '*.png' {
  const imgPath: string;
  export default imgPath;
}
