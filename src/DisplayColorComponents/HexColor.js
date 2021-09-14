/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const hexColor = css`
  width: 200px;
  margin: 30px auto;
  padding: 10px;
  border: 3px solid #212529;
  border-radius: 15px;
  background-color: #fff;
  font-size: 35px;
  text-align: center;
`;

function HexColor(props) {
  return <p css={hexColor}>{props.colorValue}</p>;
}

export default HexColor;
