import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar title="MyApp" />
      <div className="mx-1 my-1">
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm heading="Enter your text" />} />
        <Route exact path="*" element={<div>404 - Page no found</div>} />
      </Routes>
      </div>
    </Router>
  ); 
};

export default App;