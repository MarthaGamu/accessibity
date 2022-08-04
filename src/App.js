
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Model from './pages/Model'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="model" element={ <Model/> } />
      </Routes>
    </div>
  );
}

export default App;
