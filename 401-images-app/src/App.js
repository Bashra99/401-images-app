import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  routes,
  Route,
  Routes,
} from  "react-router-dom";
import Parent from './compoetnt/Parent.js';


function App() {
  return (
    <>
    <Router>
      <Routes>
       <Route exact path="/" element={<Parent />} />

      </Routes>
    </Router>
    </>
   
  );
}

export default App;
