import Button from './FormComponents/Button';
import SelectionField from './FormComponents/SelectionField';
import TextField from './FormComponents/TextField';

const formStyling = {
  width: '300px',
  margin: '0 auto',
};

function Form(props) {
  return (
    <div style={formStyling}>
      <TextField
        label="Hue"
        id="hue"
        onChange={props.textFieldHandleChange}
        value={props.textFieldValue}
      />
      <SelectionField onClick={props.selectionFieldhandleLuminosity} />
      <Button onClick={props.buttonOnClick} />
    </div>
  );
}

export default Form;
