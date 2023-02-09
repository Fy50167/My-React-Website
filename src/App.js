import { Routes, Route, useNavigate } from "react-router-dom";
import Welcome from "./Welcome.js";
import './styles.scss';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
