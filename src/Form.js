import styled from 'styled-components';
import Button from './FormComponents/Button';
import LuminosityField from './FormComponents/LuminosityField';
import TextField from './FormComponents/TextField';

const FormFields = styled.div`
  width: 350px;
  margin: 40px auto;
`;

function Form(props) {
  return (
    <FormFields>
      <TextField
        id="hue"
        labelName="Hue"
        inputValue={props.hueValue}
        inputPlaceholder="e.g. red or #123456"
        onChange={props.handleHueChange}
      />
      <LuminosityField onClick={props.handleLuminositySelection} />

      <Button onClick={props.buttonOnClick}>Generate</Button>
    </FormFields>
  );
}

export default Form;
