import React from 'react'
import Switch, { SwitchColorType, SwitchSizeType } from './components/Switch/Switch';

import ReactDOM from 'react-dom';

export { default as Button } from './components/Button';
export { default as Input } from './components/Input';
export { default as Icon } from './components/Icon';
export { default as Message } from './components/Message';
export { default as Card } from './components/Card';
export { default as Dropdown } from './components/Dropdown';
export { default as Progress } from './components/Progress';


const App = () => {
  return (
    <div style={{margin:'100px'}}>
      <Switch size={SwitchSizeType.Medium} color={SwitchColorType.Secondary}/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
