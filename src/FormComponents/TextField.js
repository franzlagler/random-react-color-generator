/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const label = css`
  margin-left: 5px;
  font-size: 25px;
  font-weight: bolder;
`;

const textInput = css`
  display: block;
  width: 350px;
  margin: 15px auto 30px auto;
  padding: 10px;
  border: 3px solid #212529;
  border-radius: 15px;
  font-size: 25px;
`;

function TextField(props) {
  return (
    <>
      <label htmlFor={props.id} css={label}>
        {props.labelName}
      </label>
      <input
        id={props.id}
        placeholder={props.inputPlaceholder}
        onChange={props.onChange}
        value={props.inputValue}
        css={textInput}
      />
    </>
  );
}

export default TextField;
