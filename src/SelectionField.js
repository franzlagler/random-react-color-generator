function SelectionField(props) {
  return (
    <fieldset>
      <legend>Luminosity</legend>
      <label htmlFor="light">Light</label>
      <input
        type="radio"
        name="luminosity"
        value="light"
        id="light"
        onClick={props.onClick}
      />
      <label htmlFor="dark">Dark</label>
      <input
        type="radio"
        name="luminosity"
        value="dark"
        id="dark"
        onClick={props.onClick}
      />
    </fieldset>
  );
}

export default SelectionField;
