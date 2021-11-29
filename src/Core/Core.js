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
    <div className='Core' id='graphic'>
      <div id='water-graphic'>
        <div id='water' style={{height: `${water.level}%`}}></div>
        <div className='channel' id='fuel-channel-1'>
          <div className='fuel-rod' id='fuel-rod-1'></div>
        </div>
        <div className='channel' id='control-channel-1'>
          <div id='control-rod' style={{height: `${moderation.position}%`}}></div>
        </div>
        <div className='channel' id='fuel-channel-2'>
          <div className='fuel-rod' id='fuel-rod-2'></div>
        </div>
      </div>
    </div>
  );
};

export default Core;