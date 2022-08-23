import { useState } from "react";
import "./App.css";
import GraphBox from './graph-box/graph-box';

function App() {
  const [count, setCount] = useState(0);

  return(
  <div>
    <p>Графы</p>
    <GraphBox />
  </div>
  )
}

export default App;
