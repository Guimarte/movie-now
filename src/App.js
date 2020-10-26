import React from 'react'
import Main from './pages/Main/index'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
function App() {
  return (
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>
  );
}

export default App;
