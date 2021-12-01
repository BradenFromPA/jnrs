import { useState } from 'react';
import './Core.css';

import ControlPanel from './ControlPanel';

const Core = () => {
  const [fuel, setFuel] = useState({
    reactivity: 0,
    temperature: 0
  });
  const [moderation, setModeration] = useState({
    position: 100,
    temperature: 0
  });
  const [pumps, setPumps] = useState(false);
  const [water, setWater] = useState({
    level: 0,
    temperature: 0
  });

  return (
    <div className='Core'>
      <ControlPanel fuel={fuel} moderation={moderation} pumps={pumps} water={water}/>
    </div>
  );
};

export default Core;