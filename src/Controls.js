import React from 'react';

const Controls = ({ heroSettings, onChange }) => {
  return (
    <div>
      <label>
        Speed:
        <input
          type="range"
          min="1"
          max="10"
          value={heroSettings.speed}
          onChange={(e) => onChange('speed', e.target.value)}
        />
      </label>
      <label>
        Spell Frequency:
        <input
          type="range"
          min="1"
          max="10"
          value={heroSettings.frequency}
          onChange={(e) => onChange('frequency', e.target.value)}
        />
      </label>
      <label>
        Spell Color:
        <input
          type="color"
          value={heroSettings.color}
          onChange={(e) => onChange('color', e.target.value)}
        />
      </label>
    </div>
  );
};

export default Controls;
