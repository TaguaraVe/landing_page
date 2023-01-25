import { useState } from 'react';
import logo from './assets/image/logos/td.png';
import logo2 from './assets/image/logos/td-trans.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-darkBlue">
      <h1 className="text-[148px]">
        <span className="text-myOrange">Taguara</span>
        <span className="text-myGreen"> Digital</span>
      </h1>
      <div>
        <img src={logo} alt="Taguara Digital Logo" />
      </div>
      <div>
        <img src={logo2} alt="Taguara Digital Logo" />
      </div>
    </div>
  );
}

export default App;
