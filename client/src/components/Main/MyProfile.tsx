import { VscVerifiedFilled } from "react-icons/vsc"
import {useActiveActionContext} from '../../context/siteContext'

const MyProfile = () => {

    const { user } = useActiveActionContext();

 console.log(user);

  return (
    <main className="">
        {/* Header containing business cover image and logo */} 
        <header className="bg-gray-100 h-[25vh]">
            <div className="">
                {/* user logo from unsplash*/}
                <img 
                className="w-[300px] h-[300px] absolute top-28 right-56 rounded-full object-cover"
                src={user.user.thumbnail} alt="business-cover" />
            </div>
        </header>

        {/* Profile Details */}
        <section className="text-xl font-semibold px-[20rem] pt-[6rem] flex flex-col gap-12">
            <div>
                <h1 className="text-5xl font-thin">{user.user.name}</h1>
            </div>
            <div>
                <h2 className="text-2xl font-semibold">{user.user.gst}</h2>
                <h3 className="text-gray-500 font-thin text-[15px]">GST IN</h3>
            </div>
            <div>
                <h2 className="text-2xl font-semibold" >{user.user.name}</h2>
                <h3 className="text-gray-500 font-thin text-[15px]">Managing Director</h3>
            </div>
            <div>
                <h2 className="text-2xl font-semibold flex gap-4 items-center" >5323 **** ***7
                    <VscVerifiedFilled className="text-green-400 text-3xl"/>
                </h2>
                <h3 className="text-gray-500 font-thin text-[15px]">Aadhaar</h3>
            </div>
            <div>
                <h2 className="text-2xl font-semibold" >{user.user.address}<br></br></h2>
                <h3 className="text-gray-500 font-thin text-[15px]">Office Address</h3>
            </div>
        </section>
    </main>
  )
}

export default MyProfile