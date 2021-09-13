function TextField(props) {
  return (
    <>
      <label htmlFor={props.id} css={{ backgroundColor: 'red' }}>
        {props.label}
      </label>
      <input id={props.id} value={props.value} onChange={props.onChange} />
    </>
  );
}

export default TextField;
