import React from 'react';
import ReactDOM from 'react-dom';

import Switch, { SwitchSizeType } from './components/Switch/Switch';
export { default as Button } from './components/Button';
export { default as Input } from './components/Input';
export { default as Icon } from './components/Icon';
export { default as Message } from './components/Message';
export { default as Card } from './components/Card';
export { default as Dropdown } from './components/Dropdown';
export { default as Progress } from './components/Progress';


function App() {
    return (
      <div className='App' style={{margin:'50px'}}>
        <Switch label={'Hello World'} size={SwitchSizeType.Small}/>
      </div>
    );
  }
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
