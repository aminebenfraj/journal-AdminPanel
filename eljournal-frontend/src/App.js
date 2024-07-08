import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateAuthor from './pages/CreateAuthor';

function App() {
  return (<BrowserRouter>
    <Routes>
      {/* <Route path="" element={<Home />} /> */}
      <Route path="/createauthor" element={<CreateAuthor />} />
    </Routes>
  </BrowserRouter>);
}

export default App;
