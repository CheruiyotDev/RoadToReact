import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Search from './Search';
import Stories from './Stories';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Search />
      {/* <Stories /> */}
    </>
  );
}

export default App;
