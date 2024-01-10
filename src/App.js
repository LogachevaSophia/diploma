import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer.tsx';
import Home from './pages/home/Home.tsx';
import Profile from './pages/Employee/Employee.tsx';
import ListEmployee from './pages/listEmployee/ListEmployee.tsx';
import Employee from './pages/Employee/Employee.tsx';
import Evaluate from './pages/Evaluate/Evaluate.tsx';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Employee />} />
        <Route path="/employees/:id" element={<Employee />} />
        
        <Route path="/employees" element={<ListEmployee />} />
        <Route path="/evaluate/:id" element={<Evaluate />} />
      </Routes>
    </Router>
    <Footer/>
    </>
   
  );
}

export default App;
