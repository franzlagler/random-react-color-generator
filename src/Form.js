/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Button from './FormComponents/Button';
import LuminosityField from './FormComponents/LuminosityField';
import Slider from './FormComponents/Slider';
import TextField from './FormComponents/TextField';

const formFields = css`
  width: 350px;
  margin: 40px auto;
`;

function Form(props) {
  return (
    <div css={formFields}>
      <TextField
        id="hue"
        labelName="Hue"
        inputValue={props.hueValue}
        inputPlaceholder="e.g. red or #123456"
        onChange={props.handleHueChange}
      />
      <LuminosityField onClick={props.handleLuminositySelection} />
      <Slider
        sliderValue={props.sliderValue}
        handleSliderChange={props.handleSliderChange}
      />
      <Button onClick={props.buttonOnClick} />
    </div>
  );
}

export default Form;
