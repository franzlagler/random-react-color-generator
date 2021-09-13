const colorTextStyling = {
  width: '150px',
  margin: '20px auto',
  padding: '10px',
  border: '3px solid #212529',
  borderRadius: '15px',
  backgroundColor: '#fff',
  fontSize: '25px',
};

function ColorText(props) {
  return <p style={colorTextStyling}>{props.value}</p>;
}

export default ColorText;
