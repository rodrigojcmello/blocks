import { ChangeEvent, FC, useEffect, useState } from 'react';
import ColorHelper from 'color-to-name';
import shader from 'shader';
import { v4 as uuid } from 'uuid';
import colorConvert from 'color-convert';
import ColorBox, { Color } from './components/ColorBox';
import TextField from './components/TextField';
import ShadeItem from './components/ShadeItem';
import HashField from './components/HashField';
import { HEXtoHSL, HSLtoHeX, HSLType } from '../../util/color';

const Colors: FC = () => {
  const [colorName, setColorName] = useState('');
  const [hexColor, setHexColor] = useState('#FA6400');
  const [shades, setShades] = useState<Color[]>([]);

  useEffect(() => {
    setColorName(ColorHelper.findClosestColor(hexColor).name);

    const newShades = [
      shader(hexColor, 0.9).toUpperCase(),
      shader(hexColor, 0.8).toUpperCase(),
      shader(hexColor, 0.6).toUpperCase(),
      shader(hexColor, 0.4).toUpperCase(),
      shader(hexColor, 0.2).toUpperCase(),
      shader(hexColor, 0).toUpperCase(),
      shader(hexColor, -0.2).toUpperCase(),
      shader(hexColor, -0.4).toUpperCase(),
      shader(hexColor, -0.6).toUpperCase(),
      shader(hexColor, -0.8).toUpperCase(),
      shader(hexColor, -0.9).toUpperCase(),
    ];

    const newColorList: Color[] = [];
    for (let i = 0; i < 10; i += 1) {
      const hsl = HEXtoHSL(newShades[i]);
      if (hsl) {
        newColorList.push({
          id: uuid(),
          hex: newShades[i],
          hsl,
          token: `green-${i}`,
          elements: 0,
        });
      }
    }

    setShades(newColorList);
  }, [hexColor]);

  const changeMainColor = (event: ChangeEvent<HTMLInputElement>) => {
    setHexColor(event.currentTarget.value);
  };

  const handleHSL = (letter: number, index: number, value: string) => {
    const ValueNumber = Number(value);
    if (
      (letter === 0 && ValueNumber >= 0 && ValueNumber <= 360) ||
      (letter !== 0 && ValueNumber >= 0 && ValueNumber <= 100)
    ) {
      const newShades = [...shades];
      if (letter !== 3) {
        newShades[index].hsl[letter] = ValueNumber;
      } else {
        newShades[index].hsl[letter] = ValueNumber / 100;
      }
      // newShades[index].hex = `#${colorConvert.hsl.hex(newShades[index].hsl)}`;
      newShades[index].hex = HSLtoHeX(newShades[index].hsl);
      setShades(newShades);
    }
  };

  const handleHex = (index: number, value: string) => {
    let newHex = value.toUpperCase();
    if (!newHex.startsWith('#')) {
      newHex = `#${newHex}`;
    }
    const newShades = [...shades];
    newShades[index].hex = newHex;
    const hsl = HEXtoHSL(newHex);
    if (hsl) {
      newShades[index].hsl = hsl;
      setShades(newShades);
      console.log('### hex.hsl', colorConvert.hex.hsl(newHex));
      console.log('### HEXtoHSL', HEXtoHSL(newHex));
    }
  };

  const handleToken = (index: number, value: string) => {
    const newShades = [...shades];
    newShades[index].token = value;
    setShades(newShades);
  };

  return (
    <div>
      <h1>Colors</h1>
      <div>
        <TextField
          type="text"
          value={hexColor}
          onChange={changeMainColor}
          textAlign="center"
        />
        <TextField type="text" defaultValue={colorName} textAlign="left" />
      </div>
      <div>
        {shades.map((shade, index) => (
          <ShadeItem key={shade.id}>
            <ColorBox shade={shade} />
            <TextField
              type="number"
              value={shade.hsl[0]}
              textAlign="center"
              min="0"
              max="360"
              onChange={(event) => {
                handleHSL(0, index, event.currentTarget.value);
              }}
            />
            <TextField
              type="number"
              value={shade.hsl[1]}
              textAlign="center"
              min="0"
              max="100"
              onChange={(event) => {
                handleHSL(1, index, event.currentTarget.value);
              }}
            />
            <TextField
              type="number"
              value={shade.hsl[2]}
              textAlign="center"
              min="0"
              max="100"
              onChange={(event) => {
                handleHSL(2, index, event.currentTarget.value);
              }}
            />
            <TextField
              type="number"
              value={Math.round(shade.hsl[3] * 100)}
              textAlign="center"
              min="0"
              max="100"
              onChange={(event) => {
                handleHSL(3, index, event.currentTarget.value);
              }}
            />
            <HashField
              value={shade.hex.slice(1)}
              onChange={(event) => {
                handleHex(index, event.currentTarget.value);
              }}
            />
            <TextField
              value={shade.token}
              textAlign="left"
              onChange={(event) => {
                handleToken(index, event.currentTarget.value);
              }}
            />
          </ShadeItem>
        ))}
      </div>
    </div>
  );
};

export default Colors;
