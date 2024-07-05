import './App.css'
import NavigationBar from './components/NavigationBar'
import { Outlet } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  AOS.init({
    duration:1200,
    offset:140,
  });
 
  return (
    <>
    <div className=''>
      <NavigationBar />
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
      <Footer />
    </div>
    </>
  )
}

export default App
