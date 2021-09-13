const selectFieldStyling = {
  margin: '5px auto',
  padding: '0',
  border: '0',
};

const legendStyling = {
  marginLeft: '5px',
  fontSize: '20px',
  fontWeight: 'bolder',
};

const labelStyling = {
  display: 'block',
};

function SelectionField(props) {
  return (
    <fieldset style={selectFieldStyling}>
      <legend style={legendStyling}>Luminosity</legend>
      <div>
        <label style={labelStyling} htmlFor="light">
          Light
        </label>
        <input
          type="radio"
          name="luminosity"
          value="light"
          id="light"
          onClick={props.onClick}
        />
      </div>
      <div>
        <label style={labelStyling} htmlFor="dark">
          Dark
        </label>
        <input
          type="radio"
          name="luminosity"
          value="dark"
          id="dark"
          onClick={props.onClick}
        />
      </div>
    </fieldset>
  );
}

export default SelectionField;
