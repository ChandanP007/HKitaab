import { VscVerifiedFilled } from "react-icons/vsc"
import {useActiveActionContext} from '../../context/siteContext'

const MyProfile = () => {

    const { user } = useActiveActionContext();

 console.log(user);

  return (
    <main className="">
        {/* Header containing business cover image and logo */} 
        <header className="bg-gray-400 h-[25vh]">
            <div className="">
                {/* user logo from unsplash*/}
                <img 
                className="border-4 border-white/50 w-[100px] h-[100px] sm:w-[300px] sm:h-[300px] absolute top-28 left-56 rounded-full object-cover"
                src={user.user.thumbnail} alt="business-cover" />
            </div>
        </header>

        {/* Profile Details */}
        <section className="px-5 pt-10 sm:text-xl font-semibold sm:px-[20rem] sm:pt-[14rem] flex flex-col gap-12">
            <div>
                <h1 className="text-3xl sm:text-5xl font-thin">{user.user.name}</h1>
            </div>
            <div>
                <h2 className="sm:text-2xl font-semibold">{user.user.gst}</h2>
                <h3 className="text-gray-500 font-thin text-xs sm:text-[15px]">GST IN</h3>
            </div>
            <div>
                <h2 className="sm:text-2xl font-semibold" >{user.user.name}</h2>
                <h3 className="text-gray-500 font-thin text-xs sm:text-[15px]">Managing Director</h3>
            </div>
            <div>
                <h2 className="sm:text-2xl font-semibold flex gap-4 items-center" >5323 **** ***7
                    <VscVerifiedFilled className="text-green-400 text-xl sm:text-3xl"/>
                </h2>
                <h3 className="text-gray-500 font-thin text-xs sm:text-[15px]">Aadhaar</h3>
            </div>
            <div>
                <h2 className="sm:text-2xl font-semibold" >{user.user.address}<br></br></h2>
                <h3 className="text-gray-500 font-thin text-xs sm:text-[15px]">Office Address</h3>
            </div>
        </section>
    </main>
  )
}

export default MyProfile