import { useState } from 'react';
import './Core.css';

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
    <div className='Core'></div>
  );
};

export default Core;