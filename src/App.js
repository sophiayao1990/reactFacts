import Main from './components/Main'
import Navbar from './components/Navbar';
import './App.css'
import { useState } from 'react';

function App() {
  const [lightMode, setLightMode] = useState(false)
  function toggleLightMode() {
    setLightMode(prevLightMode => !prevLightMode)
  }


  return (
    <div className='outline'>
      <Navbar toggleLightMode={toggleLightMode} lightMode={lightMode}/>
      <Main lightMode={lightMode}/>
    </div>
  );
}

export default App;
