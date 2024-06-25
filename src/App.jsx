import './App.css'
import NavigationBar from './components/NavigationBar'
import { Outlet } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    duration:1400,
  });
 
  return (
    <>
    <div className=''>
      <NavigationBar />
      <Outlet />
    </div>
    </>
  )
}

export default App
