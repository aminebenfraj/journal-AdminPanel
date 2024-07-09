import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import CreateAuthor from './pages/CreateAuthor';
import GetAuthors from './pages/GetAuthors';


function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 p-4 flex-1">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/createauthor" element={<CreateAuthor />} />
            <Route path="/getauthor" element={<GetAuthors />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
