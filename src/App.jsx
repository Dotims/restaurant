import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/index';
import Hero from './components/hero/index';
import AboutUs from './components/aboutUs/index';
import Dishes from './components/dishes/index';
import Accordion from './components/accordion/index';
import Menu from './pages/menu/index';
import QualityFood from './components/QualityFood/index';
import About from './pages/about/index';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Hero />
                <AboutUs />
                <Dishes />
                <Accordion />
                <QualityFood />
              </>
            }
          />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Onas' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
