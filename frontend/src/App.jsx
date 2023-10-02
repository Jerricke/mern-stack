import { BrowserRouter, Routes, Route} from 'react-router-dom';


// pages & Components
import Home from './pages/Home';
import Login from './pages/Login';
import Singup from './pages/Signup';
import Navbar from './components/Navbar';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Singup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
