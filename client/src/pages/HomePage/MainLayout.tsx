
import ActionBar from "../../components/Main/ActionBar.tsx";
import { Suspense} from "react";

import { useActiveActionContext } from '../../context/siteContext.tsx'
import Loader from "../../components/Main/Loader.tsx";
import Header from "../../components/Main/Header.tsx";
import Footer from '../../components/Main/Footer.tsx'
import Businesses from "../Businesses/Businesses.tsx";
import Landing from "./SiteLanding.tsx";


const Home = () => {

  const {user, isLoggedIn} = useActiveActionContext();
  return (
      <>
      {
        !isLoggedIn ? 
        <Landing/>
        :
        
        <>
        <Suspense fallback={<Loader/>}>
        <Header loggedUser={user.user}/>
        <main className={`w-full flex flex-col justify-center items-center min-h-[80vh]`}>
          <div className="mt-10">
            <ActionBar/>
              <div className="flex justify-center w-full p-5 sm:mb-14">
                <Businesses/>
              </div>
          </div>
        </main>
        <Footer/>
        </Suspense>
        </>
      }


      </>
  );
};

export default Home;
