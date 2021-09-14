/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

function ColorBlock(props) {
  const colorBlock = css`
    height: 130px;
    width: 130px;
    margin: 40px auto;
    background-color: ${props.backgroundColorValue};
    aspect-ratio: 1;
    border: 3px solid #212529;
    border-radius: 10px;
  `;
  return <div css={colorBlock} />;
}

export default ColorBlock;
