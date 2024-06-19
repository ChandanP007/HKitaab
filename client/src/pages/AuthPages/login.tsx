
import { useState } from "react"
import { useLogin } from "../../hooks/userAuth/useLogin"
import { Link } from "react-router-dom";
import { useActiveActionContext } from "../../context/siteContext";


const login = () => {
  const [error, setError] = useState('');
  const {clientDomain } = useActiveActionContext();

  //states
  const [input , setInput] = useState({
    email:'',
    password:''
  })

  //handlers
  const handleLoginSubmit = async(e:any)=>{
    e.preventDefault()
    const res = await useLogin(input,clientDomain);
    if(res.status === 200){
      window.location.href = '/me'
    }else{
      setError("Invalid Credentials")
    }
  }

  return (
   
      <main className="min-h-[100vh] w-full flex justify-center items-center">
        <div className=" p-5 w-[400px]">
          <h1 className="font-thin text-center text-xl mb-4">Login</h1>
          <form >
            <section className="flex flex-col">
            <input type="email" placeholder="Email" className="border-2 p-2  my-2 outline-none" onChange={
              (e)=>setInput({...input,email:e.target.value})
            } />
            <input type="password" placeholder="Password" className="border-2 p-2  my-2 outline-none" 
            onChange={
              (e)=>setInput({...input,password:e.target.value})
          
            }/>
            </section>
            <p className="p-5 text-[12px] text-red-500 text-center">{error}</p>
            <button type="submit" className="bg-slate-500 text-white p-2 w-full my-2" onClick={handleLoginSubmit}> Login</button>
          </form>
          <div >
            <p className="text-center p-5">New Registration? <Link to='/register' className="underline">Register Here</Link></p>
          </div>
        </div>
      </main>
    
  )
}

export default login