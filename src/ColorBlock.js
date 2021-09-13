const colorBlock = {
  height: '100px',
  margin: '20px auto',
  aspectRatio: '1',
};

function ColorBlock(props) {
  return <div style={{ ...colorBlock, backgroundColor: props.color }} />;
}

export default ColorBlock;
