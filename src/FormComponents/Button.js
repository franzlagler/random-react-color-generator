/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const button = css`
  display: block;
  width: 100%;
  height: 70px;
  margin: 30px auto;
  padding: 10px;
  background-color: #212529;
  border: 0;
  border-radius: 15px;
  color: #fff;
  font-size: 35px;
`;

function Button(props) {
  return (
    <button onClick={props.onClick} css={button}>
      Generate
    </button>
  );
}

export default Button;
