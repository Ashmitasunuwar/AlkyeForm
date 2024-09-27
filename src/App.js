
import '../src/css/style.css'
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import logo from '../src/Logo/Logo.png'
import FooterPage from "./components/FooterPage";
import { Routes, Route, Link } from "react-router-dom";

function App() {




  return (
    <div className="App">
      <div className="mainsection" >

        <div className="innerbox ">
          <div className="logo">
            <img className="logoimg" src={logo} height={59} width={135} alt="logo not found" />
          </div>
          <div className="container">
            <Routes>
              <Route path="/" element={<FirstPage />} />

              <Route path="/password" element={<SecondPage />} />


            </Routes>
          </div>



        </div>

        <div className="footercls ">
          <FooterPage />
        </div>

      </div>


    </div>
  );
}

export default App;
