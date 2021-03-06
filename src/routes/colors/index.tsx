import { ChangeEvent, FC, useEffect, useState } from 'react';
import ColorHelper from 'color-to-name';
import shader from 'shader';
import { v4 as uuid } from 'uuid';
import ColorBox, { Color } from './components/ColorBox';
import TextField from './components/TextField';
import ShadeItem from './components/ShadeItem';
import HashField from './components/HashField';
import {
  HEXtoHSL,
  HSLtoHeX,
  colorName as colorNameCustom,
} from '../../util/color';
import './style.scss';

const Colors: FC = () => {
  const [colorName, setColorName] = useState('');
  const [hexColor, setHexColor] = useState('#FA6400');
  const [shades, setShades] = useState<Color[]>([]);

  useEffect(() => {
    setColorName(ColorHelper.findClosestColor(hexColor).name);

    console.log('### lib', ColorHelper.findClosestColor(hexColor).name);
    console.log('### custom', colorNameCustom(hexColor));

    const newShades = [shader(hexColor, 0).toUpperCase()];

    const x = 0.15;
    for (let i = x; i < 1; i += x) {
      newShades.unshift(shader(hexColor, i).toUpperCase());
      newShades.push(shader(hexColor, -i).toUpperCase());
    }

    const newColorList: Color[] = [];
    for (const [i, newShade] of newShades.entries()) {
      const hsl = HEXtoHSL(newShade);
      if (hsl) {
        newColorList.push({
          id: uuid(),
          hex: newShade,
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
      const hex = HSLtoHeX(newShades[index].hsl);
      if (hex) {
        newShades[index].hex = hex;
        setShades(newShades);
      }
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
            <HashField
              type="number"
              value={shade.hsl[0].toString().replace(/^0+/, '')}
              min="0"
              max="360"
              onChange={(event) => {
                handleHSL(0, index, event.currentTarget.value);
              }}
              character="H"
            />
            <HashField
              type="number"
              value={shade.hsl[1].toString().replace(/^0+/, '')}
              min="0"
              max="100"
              onChange={(event) => {
                handleHSL(1, index, event.currentTarget.value);
              }}
              character="S"
            />
            <HashField
              type="number"
              value={shade.hsl[2].toString().replace(/^0+/, '')}
              min="0"
              max="100"
              onChange={(event) => {
                handleHSL(2, index, event.currentTarget.value);
              }}
              character="L"
            />
            <HashField
              type="number"
              value={Math.round(shade.hsl[3] * 100)
                .toString()
                .replace(/^0+/, '')}
              textAlign="center"
              min="0"
              max="100"
              onChange={(event) => {
                handleHSL(3, index, event.currentTarget.value);
              }}
              character="A"
            />
            <HashField
              value={shade.hex.slice(1)}
              onChange={(event) => {
                handleHex(index, event.currentTarget.value);
              }}
              character="#"
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
