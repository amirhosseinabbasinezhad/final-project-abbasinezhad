import React from 'react';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string | null;
  setSelectedSize: (size: string | null) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <div>
      <h3>Select Size:</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {sizes.map((size) => (
          <div
            key={size}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: 'lightgray',
              border: selectedSize === size ? '2px solid black' : 'none',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '18px',
            }}
            onClick={(e) => setSelectedSize(size)}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
