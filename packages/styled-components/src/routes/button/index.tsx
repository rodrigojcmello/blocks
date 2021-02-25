import { ReactElement } from 'react';
import style9 from 'style9-dynamic-value';
import Button from '../../components/Button';
import ButtonSC from '../../components/ButtonSC';

const t = {
  title: {
    color: 'black',
    backgroundColor: 'blue',
    borderWidth: 10,
    padding: 5,
  },
};

const styles = style9.create(t);

function ButtonScreen(): ReactElement {
  return (
    <div>
      <h1 className={styles('title')}>Button</h1>
      <Button
        label="Button"
        onClick={() => {
          // eslint-disable-next-line no-alert
          alert('clicked');
        }}
      />
      <ButtonSC
        label="Button"
        onClick={() => {
          // eslint-disable-next-line no-alert
          alert('clicked');
        }}
      />
    </div>
  );
}

export default ButtonScreen;
