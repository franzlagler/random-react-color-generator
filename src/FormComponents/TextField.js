const labelStyling = {
  marginLeft: '5px',
  fontSize: '20px',
  fontWeight: 'bolder',
};

const textFieldStyling = {
  display: 'block',
  width: '300px',
  margin: '5px auto 20px auto',
  padding: '10px',
  border: '3px solid #212529',
  borderRadius: '15px',
  fontSize: '25px',
};

function TextField(props) {
  return (
    <>
      <label
        style={labelStyling}
        htmlFor={props.id}
        css={{ backgroundColor: 'red' }}
      >
        {props.label}
      </label>
      <input
        style={textFieldStyling}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}

export default TextField;
