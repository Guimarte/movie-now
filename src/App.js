import React from 'react'
import Main from './pages/Main/index'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import History from './services/history'
function App() {
  return (
    <BrowserRouter>
    <Routes history={History}/>
    </BrowserRouter>
  );
}

export default App;
