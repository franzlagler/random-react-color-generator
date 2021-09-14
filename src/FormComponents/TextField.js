import styled from 'styled-components';

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

function TextField(props) {
  return (
    <>
      <Label htmlFor={props.id}>{props.labelName}</Label>
      <TextInput
        id={props.id}
        placeholder={props.inputPlaceholder}
        onChange={props.onChange}
        value={props.inputValue}
      />
    </>
  );
}

export default TextField;
