const buttonStyling = {
  display: 'block',
  width: '150px',
  height: '50px',
  margin: '20px auto',
  padding: '10px',
  backgroundColor: '#212529',
  border: '0',
  borderRadius: '15px',
  color: '#fff',
  fontSize: '25px',
};

function Button(props) {
  return (
    <button style={buttonStyling} onClick={props.onClick}>
      Generate
    </button>
  );
}

export default Button;
