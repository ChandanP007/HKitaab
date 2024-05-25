
import ActionBar from "../../components/Main/ActionBar.tsx";
import { Suspense} from "react";

import { useActiveActionContext } from '../../context/siteContext.tsx'
import Loader from "../../components/Main/Loader.tsx";
import Header from "../../components/Main/Header.tsx";
import Footer from '../../components/Main/Footer.tsx'
import Businesses from "../Businesses/Businesses.tsx";
import Landing from "./Landing.tsx";


const Home = () => {

  const {user, isLoggedIn} = useActiveActionContext();
  return (
      <>
      {
        !isLoggedIn ? 
        <Landing/>
        :
        
        <>
        <Header loggedUser={user.user}/>
        <main className={`w-full flex flex-col justify-center items-center`}>
          <div className="mt-10">
            <ActionBar/>
            <Suspense fallback={<Loader/>}>
              <div className="container flex justify-center w-full p-5 min-h-[100vh]">
                <Businesses/>
              </div>
            </Suspense>
          </div>
        </main>
        <Footer/>
        </>
      }


      </>
  );
};

export default Home;
