import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articles from './components/articles/ListOfArticles'
import AddArticle from './components/articles/CreateArticle'
import EditArticle from './components/articles/EditArticle'

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path='/articles' element={<Articles />} />
          <Route path='/articles/add' element={<AddArticle />} />
          <Route path='/articles/edit/:id' element={<EditArticle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
