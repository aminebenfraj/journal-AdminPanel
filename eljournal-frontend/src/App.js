import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
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
import DashBoard from './pages/DashBoard';
import CreateTag from './pages/tags/CreateTag';
import EditTag from './pages/tags/EditTag';
import GetTag from './pages/tags/GetTag';
import CreateArticle from './pages/article/CreateArticle';
import EditArticle from './pages/article/EditArticle';
import GetArticle from './pages/article/GetArticle';
import Login from './pages/auth/Login.js'
import Register from './pages/auth/Register.js';
import DisplayPage from './pages/DisplayPage.js';
import InputPage from './pages/InputPage.js';
import News from './pages/source/News.js';
import ViewNews from './pages/source/ViewNews.js';
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const excludeSidebarRoutes = ['/login', '/register']; // Add more routes if needed
  const shouldExcludeSidebar = excludeSidebarRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div className="flex">
      {!shouldExcludeSidebar && <Sidebar />}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/createauthor" element={<CreateAuthor />} />
          <Route path="/getauthor" element={<GetAuthors />} />
          <Route path="/editauthor/:id" element={<EditAuthor />} />
          <Route path="/createcategory" element={<CreateCategory />} />
          <Route path="/getcategory" element={<GetCategory />} />
          <Route path="/editcategory/:id" element={<EditCategory />} />
          <Route path="/createsource" element={<CreateSource />} />
          <Route path="/getSource" element={<GetSource />} />
          <Route path="/editSource/:id" element={<EditSource />} />
          <Route path="/createtag" element={<CreateTag />} />
          <Route path="/edittag/:id" element={<EditTag />} />
          <Route path="/gettag" element={<GetTag />} />
          <Route path="/createarticle" element={<CreateArticle />} />
          <Route path="/editarticle/:id" element={<EditArticle />} />
          <Route path="/getarticle" element={<GetArticle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/display" element={<DisplayPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/sources/:id" element={<ViewNews />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
