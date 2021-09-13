// Imports
import convert from 'color-convert';
import { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorText from './ColorText';
import Form from './Form';
import Heading from './Heading';

const divStyle = {
  maxWidth: '800px',
  margin: '50px auto',
  padding: '20px 25px',
  border: '3px solid #212529',
  borderRadius: '10px',
  boxShadow: '1px 1px 0 1px #212529',
  fontFamily: 'Inter',
};

function App() {
  // State Variables
  const [color, setColor] = useState('');
  const [colorText, setColorText] = useState('#000000');
  const [luminosity, setLuminosity] = useState('');

  const handleTextChange = ({ currentTarget }) => {
    const colorValue = currentTarget.value;
    setColor(colorValue);
  };

  const handleLuminositySelection = ({ currentTarget }) => {
    const selectedLuminosity = currentTarget.value;
    setLuminosity(selectedLuminosity);
  };
  const handleClick = () => {
    let hue, saturation, lightness;
    // If no color is entered
    if (!color) {
      hue = Math.floor(Math.random() * 360);
      saturation = 100;
      lightness = Math.random() * (80 - 30) + 30;
    }
    // If color is entered
    else {
      const colorValueHSL = convert.keyword.hsl(color);
      [hue, saturation, lightness] = colorValueHSL;
    }

    if (luminosity === 'light') {
      lightness = Math.random() * (80 - 60) + 60;
    } else if (luminosity === 'dark') {
      lightness = Math.random() * (50 - 30) + 30;
    } else {
      lightness = Math.random() * (80 - 30) + 30;
    }
    // Convert HSL to JEX
    const colorValueHEX = `#${convert.hsl.hex(hue, saturation, lightness)}`;

    // Set Color Text Variable
    setColorText(colorValueHEX);
    // Set Color Variale Back to Default
    setColor('');
  };

  //
  return (
    <div style={divStyle}>
      <Heading />
      <ColorText value={colorText} />
      <Form
        textFieldHandleChange={handleTextChange}
        textFieldValue={color}
        selectionFieldhandleLuminosity={handleLuminositySelection}
        buttonOnClick={handleClick}
        colorBlockColor={colorText}
      />
      <ColorBlock color={colorText} />
    </div>
  );
}

export default App;
