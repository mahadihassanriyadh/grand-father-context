import logo from './logo.svg';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';
import { createContext, useState } from 'react';

// create a context for the current purpose RingContext with a default value 'ring' 
export const RingContext = createContext('ring')

function App() {
  const [house, setHouse] = useState(2);
  const ornaments = 'Gold Ring';
  return (
    <RingContext.Provider value={ornaments}>
      <div className="App">
        <button onClick={()=>setHouse(house+1)}>Buy a new house</button>
        <GrandFather house={house}></GrandFather>
      </div>
    </RingContext.Provider>
  );
}

export default App;
