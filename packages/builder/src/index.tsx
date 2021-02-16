import { ChangeEvent, FC, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  convertHslToHex,
  convertHexToHsl,
  findColorName,
} from '@element-design/colors';
import ColorBox, { Color } from './components/ColorBox';
import TextField from './components/TextField';
import ShadeItem from './components/ShadeItem';
import HashField from './components/HashField';
import {
  colorContrast,
  contrastScore,
  getLightnessColor,
} from '../../colors/src';
// import './style.scss';

const Colors: FC = () => {
  const [colorName, setColorName] = useState('');
  const [hexColor, setHexColor] = useState('#FA6400');
  const [shades, setShades] = useState<Color[]>([]);

  useEffect(() => {
    const color = findColorName(hexColor);
    if (color) {
      setColorName(color.name);

      const newShades = getLightnessColor(hexColor);

      if (newShades) {
        const newColorList: Color[] = [];
        for (const [index, shade] of newShades.entries()) {
          const hsl = convertHexToHsl(shade);
          const contrast1 = colorContrast(shade, '#000000');
          const contrast2 = colorContrast(shade, '#FFFFFF');
          console.log({ contrast1, contrast2, shade });
          if (hsl && contrast1 && contrast2) {
            newColorList.push({
              id: uuid(),
              hex: shade,
              hsl,
              token: `green-${index}`,
              elements: 0,
              contrastColor: contrast1 > contrast2 ? '#000000' : '#FFFFFF',
            });
          }
          // if (contrast1 && contrast2) {
          //   const score1 = contrastScore(contrast1, 14);
          //   console.log({ contrast, score });
          // }
        }

        setShades(newColorList);
      }
    }
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
      const hex = convertHslToHex(newShades[index].hsl);
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
    const hsl = convertHexToHsl(newHex);
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
            <ColorBox shade={shade}>
              <div
                style={{
                  position: 'absolute',
                  color: shade.contrastColor,
                  height: 30,
                  width: 30,
                  zIndex: 1,
                  textAlign: 'center',
                  lineHeight: '30px',
                  fontSize: 12,
                  top: 0,
                }}
              >
                {index}
              </div>
            </ColorBox>
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
