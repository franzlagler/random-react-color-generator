import styled from 'styled-components';
import check from '../../public/images/check.svg';

// Styles

const RadioInput = styled.input`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 40px;
  aspect-ratio: 1;
  border: 3px solid #212529;
  background-image: url('./check.svg');
  &:checked {
    background-image: url(${check});
  }
  border-radius: 5px;
`;

const Fieldset = styled.fieldset`
  margin: 5px auto;
  padding: 0;
  border: 0;
`;

const Legend = styled.legend`
  margin-left: 5px;
  font-size: 25px;
  font-weight: bolder;
`;

const Label = styled.label`
  display: block;
`;

const RadioInputs = styled.div`
  display: flex;
`;

const SingleRadioInput = styled.div`
  display: grid;
  justify-items: center;
  margin: 15px 20px 15px 5px;
`;

// Function Component

function LuminosityField(props) {
  return (
    <Fieldset>
      <Legend>Luminosity</Legend>
      <RadioInputs>
        <SingleRadioInput>
          <Label htmlFor="light">Light</Label>
          <RadioInput
            type="radio"
            name="luminosity"
            value="light"
            id="light"
            onClick={props.onClick}
          />
        </SingleRadioInput>
        <SingleRadioInput>
          <Label htmlFor="dark">Dark</Label>
          <RadioInput
            type="radio"
            name="luminosity"
            value="dark"
            id="dark"
            onClick={props.onClick}
          />
        </SingleRadioInput>
      </RadioInputs>
    </Fieldset>
  );
}

export default LuminosityField;
