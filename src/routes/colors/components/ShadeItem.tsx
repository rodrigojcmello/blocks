import styled from 'styled-components';

const ShadeItem = styled.div(() => ({
  display: 'grid',
  gridTemplateColumns: '30px 60px 60px 60px 60px 120px 240px',
  gridGap: 8,
  marginBottom: 8,
}));

export default ShadeItem;
