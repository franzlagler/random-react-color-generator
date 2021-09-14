/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import check from '../../public/images/check.svg';

// Styles

const radioInput = css`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 40px;
  aspect-ratio: 1;
  border: 3px solid #212529;
  &:checked {
    background-image: url(${check});
  }
  border-radius: 5px;
`;

const fieldset = css`
  margin: 5px auto;
  padding: 0;
  border: 0;
`;

const legend = css`
  margin-left: 5px;
  font-size: 25px;
  font-weight: bolder;
`;

const label = css`
  display: block;
`;

const radioInputs = css`
  display: flex;
`;

const singleRadioInput = css`
  display: grid;
  justify-items: center;
  margin: 15px 20px 15px 5px;
`;

// Function Component

function LuminosityField(props) {
  return (
    <fieldset css={fieldset}>
      <legend css={legend}>Luminosity</legend>
      <div css={radioInputs}>
        <div css={singleRadioInput}>
          <label css={label} htmlFor="light">
            Light
          </label>
          <input
            css={radioInput}
            type="radio"
            name="luminosity"
            value="light"
            id="light"
            onClick={props.onClick}
          />
        </div>
        <div css={singleRadioInput}>
          <label css={label} htmlFor="dark">
            Dark
          </label>
          <input
            css={radioInput}
            type="radio"
            name="luminosity"
            value="dark"
            id="dark"
            onClick={props.onClick}
          />
        </div>
      </div>
    </fieldset>
  );
}

export default LuminosityField;
