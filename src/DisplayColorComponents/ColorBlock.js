/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react';

function ColorBlock(props) {
  const smoothTransition = keyframes`
0% {
  background-color: ${props.prevBackgroundColorValue};
}

100% {
  background-color: ${props.backgroundColorValue};
}

`;
  const colorBlock = css`
    height: ${props.boxSize[1]}px;
    width: ${props.boxSize[0]}px;
    margin: 40px auto;
    transform: scale(1);
    animation: ${smoothTransition} 3s linear forwards;
    aspect-ratio: 1;
    border: 3px solid #212529;
    border-radius: 10px;
  `;
  return <div css={colorBlock} />;
}

export default ColorBlock;
