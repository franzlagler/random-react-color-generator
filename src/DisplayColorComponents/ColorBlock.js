import styled, { keyframes } from 'styled-components';

const ColorBlock = styled.div`
  height: 130px;
  width: 130px;
  margin: 40px auto;
  aspect-ratio: 1;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#fff'};
  border: 3px solid #212529;
  border-radius: 10px;
`;

export default ColorBlock;
