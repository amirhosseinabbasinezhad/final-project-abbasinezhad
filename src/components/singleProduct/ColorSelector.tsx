import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface ColorSelectorProps {
  colors: string[];
  selectedColor: string | null;
  setSelectedColor:any
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors,
  selectedColor,
  setSelectedColor
}) => {
 

  return (
    <div>
      <h3>Select Color:</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: color,
              border: selectedColor === color ? '2px solid black' : 'none',
              cursor: 'pointer',
            }}
            onClick={(e) => setSelectedColor(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
