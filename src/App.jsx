import './App.css'
import NavigationBar from './components/NavigationBar'
import { Outlet } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
 
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
