/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const heading = css`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  font-size: 50px;
`;

function Heading() {
  return <h1 css={heading}>Random Color Generator</h1>;
}

export default Heading;
