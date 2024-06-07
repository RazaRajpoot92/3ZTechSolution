import './App.css'
import NavigationBar from './components/NavigationBar'
import { Outlet } from 'react-router-dom'


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
