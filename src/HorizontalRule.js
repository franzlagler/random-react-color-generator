/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const horizontalRule = css`
  width: 300px;
  margin: 0 auto;
  border: 2px solid #212529;
  border-radius: 15px;
`;

function HorizontalRule() {
  return <hr css={horizontalRule} />;
}
export default HorizontalRule;
