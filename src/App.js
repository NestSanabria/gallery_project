import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import Img1 from './components/Img1';
import Img2 from './components/Img2';
import Img3 from './components/Img3';
import Img4 from './components/Img4';
import Img5 from './components/Img5';
import Img6 from './components/Img6';
import Img7 from './components/Img7';
import Img8 from './components/Img8';
import Img9 from './components/Img9';
import Img10 from './components/Img10';

function App() {
  return (
    <Router>
      <div className='container'>
        <h1 id="title" className= 'text-center my-3'>Galeria</h1>
      </div>
      <Routes>
        <Route path="/img1" element={<Img1 className="image-size"/>}/>
        <Route path="/img2" element={<Img2 className="image-size"/>}/>
        <Route path="/img3" element={<Img3 className="image-size"/>}/>
        <Route path="/img4" element={<Img4 className="image-size"/>}/>
        <Route path="/img5" element={<Img5 className="image-size"/>}/>
        <Route path="/img6" element={<Img6 className="image-size"/>}/>
        <Route path="/img7" element={<Img7 className="image-size"/>}/>
        <Route path="/img8" element={<Img8 className="image-size"/>}/>
        <Route path="/img9" element={<Img9 className="image-size"/>}/>
        <Route path="/img10" element={<Img10 className="image-size"/>}/>
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
