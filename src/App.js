/** @jsxImportSource @emotion/react */

// Imports
import convert from 'color-convert';
import { useState } from 'react';
import Button from './Button';
import ColorBlock from './ColorBlock';
import ColorText from './ColorText';
import Heading from './Heading';
import SelectionField from './SelectionField';
import TextField from './TextField';

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
    <>
      <Heading />
      <ColorText value={colorText} />
      <TextField
        label="Hue"
        id="hue"
        onChange={handleTextChange}
        value={color}
      />
      <SelectionField onClick={handleLuminositySelection} />
      <Button onClick={handleClick} />
      <ColorBlock color={colorText} />
    </>
  );
}

export default App;
