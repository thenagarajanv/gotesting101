import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home.js';
import AskLead from './Components/AskLead.js';
import ApplicationStatus from './Components/ApplicationStatus.js';
import LeaderBoard from './Components/LeaderBoard.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/AskLead' element={<AskLead/>}/>
          <Route path='/LeaderBoard' element={<LeaderBoard/>}/>
          <Route path='/ApplicationStatus' element={<ApplicationStatus/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
