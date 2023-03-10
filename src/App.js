import './App.css';
import Main from './components/layout/Main';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <Main />
    </BrowserRouter>
  );
}

export default App;
