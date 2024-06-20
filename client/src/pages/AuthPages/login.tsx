
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
        <div className=" p-5">
          <div className="flex flex-col gap-y-3 py-5 ">
            <h1 className="font-bold sm:text-center text-2xl ">HisaabKitaab</h1>
            <p className="text-gray-400 text-xs">Simplify your Business Management with AI-Powered Tools</p>
          </div>
          <form >
            <section className="flex flex-col">
            <input type="email" placeholder="Email" className="border-[1px] border-black/50 p-2  my-2 outline-none" onChange={
              (e)=>setInput({...input,email:e.target.value})
            } />
            <input type="password" placeholder="Password" className="border-[1px] border-black/50 p-2  my-2 outline-none" 
            onChange={
              (e)=>setInput({...input,password:e.target.value})
          
            }/>
            </section>
            <p className="p-5 text-[12px] text-red-500 text-center">{error}</p>
            <button type="submit" className="bg-black/50 rounded-md text-white p-2 w-full my-1" onClick={handleLoginSubmit}> Login</button>
          </form>
          <div >
            <p className="text-center p-5">New Registration? <Link to='/register' className="underline">Register Here</Link></p>
          </div>
        </div>
      </main>
    
  )
}

export default login