import { ChangeEvent, FC, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  convertHslToHex,
  convertHexToHsl,
  findColorName,
  colorContrast,
  scaleLightness,
  validateHexColor,
  cleanHex,
} from '@element-design/colors';
import ColorBox, { Color } from './components/ColorBox';
import SimpleText from './components/TextField/SimpleText';
import { ColorsGrid, FormGrid } from './components/Grids';
import IconText from './components/TextField/IconText';
import HueBox from './components/HueBox';

const Colors: FC = () => {
  const [colorName, setColorName] = useState('');
  const [hexColor, setHexColor] = useState('#6DD400');
  const [scale, setScale] = useState<Color[]>([]);

  useEffect(() => {
    if (validateHexColor(hexColor)) {
      const color = findColorName(hexColor);
      if (color) {
        setColorName(color.name);

        const newScale = scaleLightness(hexColor);

        if (newScale) {
          const range = 800 / (newScale.length - 1);

          const newColorList: Color[] = [];
          for (const [index, shade] of newScale.entries()) {
            const hsl = convertHexToHsl(shade);
            const contrast1 = colorContrast(shade, '#000000');
            const contrast2 = colorContrast(shade, '#FFFFFF');
            if (hsl && contrast1 && contrast2) {
              newColorList.push({
                id: uuid(),
                hex: shade,
                hsl,
                token: `green-${Math.round(
                  100 + range * index
                )}-for-light-theme`,
                elements: 0,
                contrastColor: contrast1 > contrast2 ? '#000000' : '#FFFFFF',
              });
            }
            // if (contrast1 && contrast2) {
            //   const score1 = contrastScore(contrast1, 14);
            //   console.log({ contrast, score });
            // }
          }

          setScale(newColorList);
        }
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
      const newShades = [...scale];
      if (letter !== 3) {
        newShades[index].hsl[letter] = ValueNumber;
      } else {
        newShades[index].hsl[letter] = ValueNumber / 100;
      }
      const hex = convertHslToHex(newShades[index].hsl);
      if (hex) {
        newShades[index].hex = hex;
        setScale(newShades);
      }
    }
  };

  const handleHex = (index: number, value: string) => {
    let newHex = value.toUpperCase();
    if (!newHex.startsWith('#')) {
      newHex = `#${newHex}`;
    }
    const newShades = [...scale];
    newShades[index].hex = newHex;
    const hsl = convertHexToHsl(newHex);
    if (hsl) {
      newShades[index].hsl = hsl;
    }
    setScale(newShades);
  };

  const handleToken = (index: number, value: string) => {
    const newShades = [...scale];
    newShades[index].token = value;
    setScale(newShades);
  };

  return (
    <div>
      {/* <HueBox backgroundSize={1200} backgroundPosition={0} width={1200} /> */}
      <div
        style={{
          display: 'flex',
          gap: 8,
        }}
      >
        <HueBox
          color="#E02020"
          backgroundSize={1200}
          backgroundPosition={-50}
        />
        <HueBox
          color="#FA6400"
          backgroundSize={1200}
          backgroundPosition={-150}
        />
        <HueBox
          color="#F7B500"
          backgroundSize={1200}
          backgroundPosition={-250}
        />
        <HueBox
          color="#80FF00"
          backgroundSize={1200}
          backgroundPosition={-350}
        />
        <HueBox
          color="#00FF00"
          backgroundSize={1200}
          backgroundPosition={-450}
        />
        <HueBox
          color="#00FF80"
          backgroundSize={1200}
          backgroundPosition={-550}
        />
        <HueBox
          color="#00FFFF"
          backgroundSize={1200}
          backgroundPosition={-650}
        />
        <HueBox
          color="#0080FF"
          backgroundSize={1200}
          backgroundPosition={-750}
        />
        <HueBox
          color="#0000FF"
          backgroundSize={1200}
          backgroundPosition={-850}
        />
        <HueBox
          color="#8000FF"
          backgroundSize={1200}
          backgroundPosition={-950}
        />
        <HueBox
          color="#FF00FF"
          backgroundSize={1200}
          backgroundPosition={-1050}
        />
        <HueBox
          color="#FF0080"
          backgroundSize={1200}
          backgroundPosition={-1150}
        />
        {/* <HueBox backgroundSize={1200} backgroundPosition={-1250} /> */}
      </div>
      <h1>Colors</h1>
      <FormGrid>
        <IconText
          character="#"
          value={cleanHex(hexColor)}
          onChange={changeMainColor}
        />
        <SimpleText type="text" defaultValue={colorName} />
      </FormGrid>
      <div>
        {scale.map((shade, index) => (
          <ColorsGrid key={shade.id}>
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
                  opacity: 0.85,
                }}
              >
                {index + 1}
              </div>
            </ColorBox>
            <IconText
              type="number"
              value={shade.hsl[0].toString()}
              min="0"
              max="360"
              onChange={(event) => {
                handleHSL(0, index, event.currentTarget.value);
              }}
              character="H"
            />
            <IconText
              type="number"
              value={shade.hsl[1].toString()}
              min="0"
              max="100"
              onChange={(event) => {
                handleHSL(1, index, event.currentTarget.value);
              }}
              character="S"
            />
            <IconText
              type="number"
              value={shade.hsl[2].toString()}
              min="0"
              max="100"
              onChange={(event) => {
                handleHSL(2, index, event.currentTarget.value);
              }}
              character="L"
            />
            <IconText
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
            <IconText
              value={shade.hex.slice(1)}
              onChange={(event) => {
                handleHex(index, event.currentTarget.value);
              }}
              character="#"
            />
            <SimpleText
              value={shade.token}
              onChange={(event) => {
                handleToken(index, event.currentTarget.value);
              }}
            />
          </ColorsGrid>
        ))}
      </div>
    </div>
  );
};

export default Colors;
