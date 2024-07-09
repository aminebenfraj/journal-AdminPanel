import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import CreateAuthor from './pages/author/CreateAuthor';
import GetAuthors from './pages/author/GetAuthors';
import EditAuthor from './pages/author/EditAuthor';


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
            <Route path="/editauthor/:id" element={<EditAuthor />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
