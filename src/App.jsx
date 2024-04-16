import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Checkout } from './Components';
import Home from './Components/Home/Home';
import { FetchIPAdress, locationContext } from './Components/Location/IPAdress';
import ProductDetail from './Components/ProductDetail';
import { useMediaQuery } from 'react-responsive';
import DesktopModeSwitcher from './Components/DesktopModeSwitcher';



function App() {

  const isSmallScreen = useMediaQuery({ minWidth: 768 });
  const value = FetchIPAdress();


  return (
    <div>
      {isSmallScreen ?
        (<locationContext.Provider value={value}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/checkout'
                element={<Checkout />} />

              <Route path='/product'
                element={<ProductDetail />} />
            </Routes>
          </BrowserRouter>
        </locationContext.Provider>) : (
          <div className='w-[300px] m-auto mt-20 text-center text-black'>
            <h1 className='text-black text-[2rem] text-center '>Screen size too small</h1>
            <p>Switch to desktop view</p>
            <DesktopModeSwitcher />
          </div>
        )}
    </div>
  );
}

export default App;