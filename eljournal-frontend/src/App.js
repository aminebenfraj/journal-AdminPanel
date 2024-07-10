import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import CreateAuthor from './pages/author/CreateAuthor';
import GetAuthors from './pages/author/GetAuthors';
import EditAuthor from './pages/author/EditAuthor';
import CreateCategory from './pages/category/CreatCategory';
import GetCategory from './pages/category/GetCategory';
import EditCategory from './pages/category/EditCategory';
import CreateSource from './pages/source/CreateSource';
import GetSource from './pages/source/GetSource';
import EditSource from './pages/source/EditSource';


function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="  flex-1">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/createauthor" element={<CreateAuthor />} />
            <Route path="/getauthor" element={<GetAuthors />} />
            <Route path="/editauthor/:id" element={<EditAuthor />} />
            <Route path="/createcategory" element={<CreateCategory />} />
            <Route path="/getcategory" element={<GetCategory />} />
            <Route path="/editcategory/:id" element={<EditCategory />} />
            <Route path="/createsource" element={<CreateSource />} />
            <Route path="/getSource" element={<GetSource />} />
            <Route path="/editSource/:id" element={<EditSource />} />


          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
