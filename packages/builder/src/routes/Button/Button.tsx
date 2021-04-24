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

const uniqueStyle = (styles: UniqueStyleObject) => {
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

  for (const element of Object.keys(newElement)) {
    newNewElement[element] = [];
    for (const className of newElement[element]) {
      newNewElement[element].push(min[className]);
    }
  }

  console.log({ newNewElement, x });

  //   const style = document.createElement('style');
  //   style.innerHTML = '.cssClass { color: blue; }';
  //   document.querySelectorAll('head')[0].append(style);

  return newNewElement;
};

const Button: FC = () => {
  // useEffect(() => {
  //   const style = document.createElement('style');
  //   style.innerHTML = '.cssClass { color: blue; }';
  //   document.querySelectorAll('head')[0].append(style);
  // }, []);

  const x = useMemo(
    () =>
      uniqueStyle({
        container: {
          backgroundColor: 'blue',
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
          backgroundColor: 'red',
        },
      }),
    []
  );

  console.log({ x });

  return (
    <button type="button" className={x.container.join(' ')}>
      <div className={x.label.join(' ')}>button</div>
    </button>
  );
};

export default Button;
