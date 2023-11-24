import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Epl from './view/Epl';
import Home from './view/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ligue1 from './view/Ligue1';
import Bundesliga from './view/Bundesliga';
import Laliga from './view/Laliga';
import Movie from './view/Movie';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/epl" element={<Epl />} />
          <Route path="/ligue_1" element={<Ligue1 />} />
          <Route path="/bundesliga" element={<Bundesliga />} />
          <Route path="/laliga" element={<Laliga />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
