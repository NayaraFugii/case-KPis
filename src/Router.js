import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Search from './pages/search/Search';

function Router() {
    return (      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Search/>} />
          <Route path="/search/part1" element={<Search/>} />
          <Route path="/search/part2" element={<Search/>} />
          <Route path="/finish" element={<Search/>} />
        </Routes>
      </BrowserRouter>        
    );
  }
  
  export default Router;