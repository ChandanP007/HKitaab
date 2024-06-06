//app imports
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import {lazy, Suspense} from 'react'


//static & components
import './styles/app.scss'
import Loader from './components/Main/Loader'
import Landing from './pages/Home/Landing'
import Home from './pages/Home/Home'
const Register = lazy(()=>import('./pages/Auth/register'))
const Login = lazy(()=>import('./pages/Auth/login'))
const MyProfile = lazy(()=>import('./components/Main/MyProfile'))

const App = () => {

  return <Router>
    <Suspense fallback={<Loader/>}>

    {/* <Header/> */}
    <Routes>
      <Route path="/me" element={<Home/>} />
      <Route path="/me/profile" element={<MyProfile/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/landing' element={<Landing/>}/>
    </Routes>
    {/* <Footer/> */}
    </Suspense>
  </Router>
}

export default App