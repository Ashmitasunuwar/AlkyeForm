
import '../src/css/style.css';

import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

import FooterPage from "./components/FooterPage";
import WelcomePage from './components/WelcomePage';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<FirstPage />} />

        <Route path="/password" element={<SecondPage />} />
        <Route path="/dashboard" element={<WelcomePage />} />


      </Routes>

    </div>


  )
}

export default App;
