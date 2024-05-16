//app imports
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import {lazy, Suspense} from 'react'


//static & components
import './styles/app.scss'
import Loader from './components/Main/Loader'
// import { useActiveActionContext } from '../src/context/activeAction'
// import Header from './components/Header'
// import Footer from './components/Footer'
const Home = lazy(()=>import('./pages/home/home'))
const Register = lazy(()=>import('./pages/auth/register'))
const Login = lazy(()=>import('./pages/auth/login'))


const App = () => {
  // const {user} = useActiveActionContext();
  // console.log(user);

  return <Router>
    <Suspense fallback={<Loader/>}>
    {/* <Header/> */}
    <Routes>
      <Route path="/me" element={<Home/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='*' element={<Home/>}/>
      {/* Business Routes  */}
      
    </Routes>
    {/* <Footer/> */}
    </Suspense>
  </Router>
}

export default App