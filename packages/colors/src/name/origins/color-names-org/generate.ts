/* eslint-disable no-console */
/**
 * origin colornames.txt
 * @see {@link https://colornames.org/download/}
 */
import lineReader from 'line-reader';
import { formatColorTexts, writeColor } from '../common';

interface ColorNamesOrg {
  name: string;
  hex: string;
  votes: string;
}
const colorNamesOrg: ColorNamesOrg[] = [];

let index = 0;
lineReader.eachLine(
  './colornames.txt',
  (line) => {
    const [hex, name, votes] = line.split(',');
    // console.log({ hex, name, votes, index });
    console.log(index);
    colorNamesOrg.push({ hex, name, votes });
    index += 1;
  },
  () => {
    console.log("I'm done!!");
    for (const color of colorNamesOrg) {
      if (Number.parseInt(color.votes, 10) > 10) {
        formatColorTexts(color.name, `#${color.hex}`);
      }
    }
    writeColor('colorNameOrg');
  }
);
