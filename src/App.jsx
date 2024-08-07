import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-3xl font-semibold">
      <h1>Calculator App</h1>
    </div>
  );
}

export default App;
