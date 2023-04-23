import Home from './home';
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Services from './services';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/services" Component={Services}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
