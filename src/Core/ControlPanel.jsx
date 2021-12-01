import './ControlPanel.css';

const ControlPanel = (props) => {
  return (
    <div className='ControlPanel'>
      <div id='graphic-container'>
        <div id='graphic-water'>
          <div id='water' style={{height: `${props.water.level}%`}}></div>
          <div className='graphic-control'>
            <div className='control-rod' style={{height: `${props.moderation.position}%`}}></div>
          </div>
          <div className='graphic-fuel'>
            <div className='fuel'></div>
          </div>
          <div className='graphic-control'>
            <div className='control-rod' style={{height: `${props.moderation.position}%`}}></div>
          </div>
          <div className='graphic-fuel'>
            <div className='fuel'></div>
          </div>
          <div className='graphic-control'>
            <div className='control-rod' style={{height: `${props.moderation.position}%`}}></div>
          </div>
          <div className='graphic-fuel'>
            <div className='fuel'></div>
          </div>
          <div className='graphic-control'>
            <div className='control-rod' style={{height: `${props.moderation.position}%`}}></div>
          </div>
        </div>
      </div>
      <div id='core-controls'>
        <div id='moderation-controls'></div>
        <div id='pump-controls'></div>
      </div>
    </div>
  );
};

export default ControlPanel;