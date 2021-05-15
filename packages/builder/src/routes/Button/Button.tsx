import { FC, useEffect, useMemo } from 'react';

interface UniqueStyleObject {
  [element: string]: {
    [styleProperty: string]: string;
  };
}

interface GlobalUniqueStyle {
  [className: string]: {
    [styleProperty: string]: string;
  };
}

interface NewElement {
  [element: string]: string[];
}

interface NewX {
  [styleProperty: string]: string;
}

const minimalHash = (global: GlobalUniqueStyle) => {
  const minAscII = 97; // a
  const maxAscII = 122; // z
  let index1 = -1;
  let index2 = -1;
  let index3 = 0;

  const newX: NewX = {};

  for (const className of Object.keys(global)) {
    if (minAscII + index3 > maxAscII) {
      index3 = 0;
      index2++;
      if (minAscII + index2 > maxAscII) {
        index2 = 0;
        index1++;
      }
    }
    // limit 18277
    if (!(minAscII + index1 > maxAscII)) {
      newX[className] =
        (index1 >= 0 ? String.fromCharCode(minAscII + index1) : '') +
        (index2 >= 0 ? String.fromCharCode(minAscII + index2) : '') +
        String.fromCharCode(minAscII + index3);
      index3++;
    }
  }

  return newX;
};

function camelCaseToDash(myString: string) {
  return myString.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

const uniqueStyle = (styles: UniqueStyleObject): NewElement => {
  console.log({ styles });
  const x: GlobalUniqueStyle = {};
  const newElement: NewElement = {};
  for (const element of Object.keys(styles)) {
    newElement[element] = [];
    for (const styleProperty of Object.keys(styles[element])) {
      const valueNormalized = styles[element][styleProperty].toLowerCase();
      console.log({ valueNormalized }, styleProperty + valueNormalized);
      x[styleProperty + valueNormalized] = {
        [styleProperty]: valueNormalized,
      };
      newElement[element].push(styleProperty + valueNormalized);
    }
  }

  console.log({ newElement });

  const min = minimalHash(x);
  console.log({ min });
  const newNewElement: NewElement = {};
  const newX: GlobalUniqueStyle = {};

  for (const element of Object.keys(newElement)) {
    newNewElement[element] = [];
    for (const className of newElement[element]) {
      newNewElement[element].push(min[className]);
      newX[min[className]] = x[className];
    }
  }

  console.log({ newNewElement, x, newX });

  const stringStyle = Object.keys(newX)
    .map((className) => {
      return `.${className} { ${camelCaseToDash(
        Object.keys(newX[className])[0]
      )}: ${newX[className][Object.keys(newX[className])[0]]} }`;
    })
    .join(' ');

  console.log({ stringStyle });

  const style = document.createElement('style');
  // style.innerHTML = '.cssClass { color: blue; }';
  style.innerHTML = stringStyle;
  document.querySelectorAll('head')[0].append(style);

  return newNewElement;
};

const Button: FC = () => {
  const x = useMemo(
    () =>
      uniqueStyle({
        container: {
          backgroundColor: 'blue',
          fontSize: '20px',
          color: 'white',
          // status: {
          //   warning: {
          //     backgroundColor: 'yellow',
          //     color: 'black',
          //   },
          // },
        },
        label: {
          color: 'white',
          fontSize: '24px',
          backgroundColor: 'red',
        },
      }),
    []
  );

  console.log({ x });

  return (
    <button type="button" className={x}>
      <div className={x.label.join(' ')}>button</div>
    </button>
  );
};

export default Button;
