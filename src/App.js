import React, { useState } from 'react';
import GameCanvas from './GameCanvas';
import Controls from './Controls';

const App = () => {
  const [hero1Settings, setHero1Settings] = useState({ speed: 5, frequency: 5, color: 'blue' });
  const [hero2Settings, setHero2Settings] = useState({ speed: 5, frequency: 5, color: 'red' });

  const handleHero1SettingsChange = (key, value) => {
    setHero1Settings({ ...hero1Settings, [key]: value });
  };

  const handleHero2SettingsChange = (key, value) => {
    setHero2Settings({ ...hero2Settings, [key]: value });
  };

  return (
    <div>
      <GameCanvas hero1Settings={hero1Settings} hero2Settings={hero2Settings} />
      <Controls heroSettings={hero1Settings} onChange={handleHero1SettingsChange} />
      <Controls heroSettings={hero2Settings} onChange={handleHero2SettingsChange} />
    </div>
  );
};

export default App;
