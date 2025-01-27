import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import {BrowserRouter as Router,
Routes,
Route} from "react-router-dom"

function App() {
  return (    
      <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element ={<AboutUs/>}/>
      </Routes>
      </Router>
  );
}

export default App;
