import './App.css';
import Main from './components/layout/Main';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Admin from './pages/Admin';
import Deliveries from './pages/Deliveries';
import Account from './pages/Account';



function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Main/>
      <Routes>
        <Route path="/" element={<Login/> } />
        <Route path="/Registration" element={<Registration/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Deliveries" element={<Deliveries/>}/>
        <Route path="/Account" element={<Account/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
