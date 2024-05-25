import { useState } from "react"
import { FaRobot } from "react-icons/fa";

const Bot = () => {

  //state for the chat
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
    
      <div className="max-w-md p-4 fixed z-1000 bottom-24 right-24">

        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-slate-500 text-white p-4 rounded-full hover:bg-slate-600"
        >
          <FaRobot className="w-6 h-6" />
        </button>

        <section className={`${chatOpen ? "" : "hidden"}`}>
            <div className="bg-white rounded-lg shadow-md p-4">

              <div className="flex items-center mb-4">
                <div className="ml-3">
                  <p className="text-xl font-medium">Ask me anything</p>
                  <p className="text-gray-500 text-xs">Chat assistant, HisaabKitaab</p>
                </div>
              </div>

            
              <div className="space-y-4">

                <div className="flex items-start">
                  
                  <div className="ml-3 bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-gray-800">Hello! How can I help you today?</p>
                  </div>
                </div>

              
                
              </div>
          

              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 py-2 px-3 rounded-full bg-gray-100 focus:outline-none"
                />
                <button className="bg-slate-500 text-white px-4 py-2 rounded-full ml-3 hover:bg-slate-600">Send</button>
              </div>

            </div>
        </section>
      </div>
</>
  )
}

export default Bot