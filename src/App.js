import './App.css';
import Main from './components/layout/Main';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { tokensReceived } from './state/actions';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"))

    if (auth) {
      dispatch(tokensReceived(auth))
    }
  })

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
