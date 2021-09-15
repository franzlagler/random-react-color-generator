/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const fieldset = css`
  margin: 20px auto;
  padding: 0;
  border: 0;
`;

const legend = css`
  margin-left: 5px;
  font-size: 25px;
  font-weight: bolder;
`;

const slider = css`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 30px;
  margin-top: 10px;
  border: 3px solid #212529;
  border-radius: 3px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 40px;
    height: 40px;
    background-color: #212529;
    border-radius: 3px;
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 40px;
    height: 40px;
    background-color: #212529;
    border-radius: 3px;
  }
`;

const singleSliderInput = css`
  margin: 20px 25px 10px 5px;
`;

function Slider(props) {
  return (
    <fieldset css={fieldset}>
      <legend css={legend}>Box Size</legend>
      <div css={singleSliderInput}>
        <label htmlFor="width">Width</label>
        <input
          type="range"
          min="50"
          max="500"
          id="width"
          css={slider}
          value={props.sliderValue[0]}
          onChange={props.handleSliderChange}
        />
      </div>
      <div css={singleSliderInput}>
        <label htmlFor="height">Height</label>
        <input
          type="range"
          min="50"
          max="500"
          id="height"
          css={slider}
          onChange={props.handleSliderChange}
        />
      </div>
    </fieldset>
  );
}

export default Slider;
