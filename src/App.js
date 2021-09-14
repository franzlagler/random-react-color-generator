// Imports
import convert from 'color-convert';
import colorName from 'color-name';
import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ColorBlock from './DisplayColorComponents/ColorBlock';
import HexColor from './DisplayColorComponents/HexColor';
import Form from './Form';
import Heading from './Heading';
import HorizontalRule from './HorizontalRule';
import MainContainer from './MainContainer';

// Global Styles
const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap");


* {
  font-family: 'Inter',sans-serif;
  box-sizing: border-box;
}

body {
  background-color: #ced4da;
}

`;

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px 25px;
  background-color: #f8f9fa;
  border: 3px solid #212529;
  border-radius: 10px;
  box-shadow: 1px 1px 0 1px #212529;
`;

// App Component

function App() {
  // State Variables
  const [colorInput, setColorInput] = useState('');
  const [colorValue, setColorValue] = useState('#ffffff');
  const [luminosity, setLuminosity] = useState('');
  const [boxSizeInput, setBoxSizeInput] = useState('');
  const [boxSizeValue, setBoxSizeValue] = useState([130, 130]);

  const handleHueChange = ({ currentTarget }) => {
    setColorInput(currentTarget.value);
  };

  const handleLuminositySelection = ({ currentTarget }) => {
    const selectedLuminosity = currentTarget.value;
    setLuminosity(selectedLuminosity);
  };

  const handleBoxSizeChange = ({ currentTarget }) => {
    setBoxSizeInput(currentTarget.value);
  };

  function handleClick() {
    let hue, saturation, lightness;
    // If no color is entered
    if (!colorInput) {
      hue = Math.floor(Math.random() * 360);
      saturation = 100;
      lightness = Math.random() * (80 - 30) + 30;
    }
    // If color is entered
    else {
      // If input keyword
      if (colorName[colorInput.toLowerCase()]) {
        const colorValueHSL = convert.keyword.hsl(colorInput);
        [hue, saturation, lightness] = colorValueHSL;

        // If input HEX
      } else if (colorInput.match(/#[a-fA-F1-9]{6}\b/g)) {
        // Set Color Text Variable
        setColorValue(colorInput);
        // Set Color Variale Back to Default
        setColorInput('');
        // If input not valid
      } else {
        setColorInput('Invalid input');
        setTimeout(() => {
          setColorInput('');
        }, 3000);
        return;
      }
    }

    // Luminosity Selection
    if (luminosity === 'light') {
      lightness = Math.random() * (70 - 60) + 60;
    } else if (luminosity === 'dark') {
      lightness = Math.random() * (50 - 30) + 30;
    } else {
      lightness = Math.random() * (70 - 30) + 30;
    }

    const colorValueHEX = `#${convert.hsl.hex(hue, saturation, lightness)}`;
    // Set Color Text Variable
    setColorValue(colorValueHEX);
    // Set Color Variale Back to Default
    setColorInput('');
  }

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Heading>Random Color Generator</Heading>
        <Form
          handleHueChange={handleHueChange}
          hueValue={colorInput}
          handleLuminositySelection={handleLuminositySelection}
          buttonOnClick={handleClick}
          colorBlockColor={colorValue}
          handleBoxSizeChange={handleBoxSizeChange}
        />
        <HorizontalRule />
        <ColorBlock backgroundColor={colorValue} />
        <HexColor>{colorValue}</HexColor>
      </MainContainer>
    </>
  );
}

export default App;
