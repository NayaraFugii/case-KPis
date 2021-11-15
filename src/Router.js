import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Static from './pages/static-introduction/Static';
import Search from './pages/search/Search';
import LastPage from './pages/last-page/LastPage';


function Router() {
    return (      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Static/>} />
          <Route path="/search/part1" element={<Search/>} />
          <Route path="/search/part2" element={<Search/>} />
          <Route path="/finish" element={<LastPage/>} />
        </Routes>
      </BrowserRouter>        
    );
  }
  
  export default Router;