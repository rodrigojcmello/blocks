import packageJson from '../package.json';

const dependencies = [];

for (const dep of Object.keys(packageJson.dependencies)) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  dependencies.push(`${dep}@${packageJson.dependencies[dep]}`);
}

const command = `yarn add -D @element-design/eslint-config@^${
  packageJson.version
} ${dependencies.join(' ')}`;

console.log({ command });
