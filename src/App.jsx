import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Search from './Search';
import Stories from './Stories';
import Filtered from './Filtered';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Search />
      {/* <Stories /> */}
      <Filtered />
    </>
  );
}

export default App;
