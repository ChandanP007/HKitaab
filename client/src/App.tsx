//app imports
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import {lazy, Suspense} from 'react'


//static & components
import './styles/app.scss'
import Loader from './components/Main/Loader'
import Landing from './pages/home/Landing'
import Home from './pages/home/Home'
const Register = lazy(()=>import('./pages/auth/register'))
const Login = lazy(()=>import('./pages/auth/login'))
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
      <Route path='*' element={<Landing/>}/>
    </Routes>
    {/* <Footer/> */}
    </Suspense>
  </Router>
}

export default App