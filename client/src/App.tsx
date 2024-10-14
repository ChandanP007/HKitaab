//app imports
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import {lazy, Suspense} from 'react'
import {ReactLenis} from 'lenis/react';



//static & components
import './styles/app.scss'
import Loader from './components/Main/Loader'
import Home from './pages/HomePage/MainLayout'
const Register = lazy(()=>import('./pages/AuthPages/register'))
const Login = lazy(()=>import('./pages/AuthPages/login'))
const MyProfile = lazy(()=>import('./components/Main/MyProfile'))
const Transaction = lazy(()=>import('./pages/Businesses/Transaction'))


const App = () => {

  return <Router>
    <ReactLenis root>
    <Suspense fallback={<Loader/>}>

    {/* <Header/> */}
    <Routes>
      <Route path="/me" element={<Home/>} />
      <Route path="/me/profile" element={<MyProfile/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/transaction/:id" element={<Transaction/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    {/* <Footer/> */}
    </Suspense>
    </ReactLenis>
  </Router>
}

export default App