import styled from 'styled-components';
import TextField from './TextField';

const Label = styled.label`
  margin-left: 5px;
  font-size: 25px;
  font-weight: bolder;
`;

const TextInput = styled.input`
  display: block;
  width: 350px;
  margin: 15px auto 30px auto;
  padding: 10px;
  border: 3px solid #212529;
  border-radius: 15px;
  font-size: 25px;
`;

function HueField(props) {
  return (
    <>
      <TextField
        id={props.id}
        labelName={props.label}
        value={props.value}
        onChange={props.onChange}
        placeholder="e.g. red or #123456"
      />
      <Label htmlFor={props.id}>{props.label}</Label>
      <TextInput
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder="e.g. red or #123456"
      />
    </>
  );
}

export default HueField;
