import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Page from './components/Page';
import LoggedInPage from './components/LoggedInPage';
import { SpotifyAuthProvider } from './contexts/SpotifyAuthContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <SpotifyAuthProvider>
      <div className="App">
        <header className="App-header">
        <Router>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/page" element={<Page />}/>
              <Route path="/loggedin" element={<LoggedInPage />}/>
            </Routes>
          </Router>
        </header>
      </div>
    </SpotifyAuthProvider>
  );
}

export default App;
