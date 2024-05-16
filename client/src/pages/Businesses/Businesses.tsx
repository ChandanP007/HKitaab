
import BusinessCard from '../../components/Card/BusinessCard'
import EmptyCard from '../../components/Card/EmptyCard' 
import { useEffect, useState } from 'react'
import { useActiveActionContext } from '../../context/siteContext'

// Desc: Businesses page
const Businesses = () => {

  const {clientDomain, user, Selected} = useActiveActionContext()
  const [businesses, setBusinesses] = useState([]) 
  const activePage = Selected.buyers ? 'buyers' : Selected.sellers ? 'sellers' : Selected.transporters ? 'transporters' : Selected.agents ? 'agents' : 'services'
  // console.log(activePage)
  
  //fetch all businesses data
  useEffect(() => {
    if(user.role === "admin"){
      fetch(`${clientDomain}/${activePage}`, {credentials: 'include'})
      .then(response => response.json())
      .then(data => {setBusinesses(data.results);})
      .catch((error) => {
        console.error('Error:', error);
      });
    }else{
      fetch(`${clientDomain}/me/${activePage}`, {credentials: 'include'})
      .then(response => response.json())
      .then(data => {setBusinesses(data.buyers); 
        // console.log(data.buyers); 
        // console.log(user.role)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }, [activePage])


  return (
    <>
      {/* Larger screens  */}
      <main className="flex w-full justify-center items-center ml-16 gap-10 h-full flex-wrap max-w-6xl">
          {
            businesses.map((business:any) => (
              <BusinessCard 
              gst= {business['gst'] ? business['gst'] : business['gstno']}
              btype= {business['type'] ? business['type'] : business['businessType']}
              title={business['name']} 
              src={
                business['thumbnail']
              } 
              address={business['address']} 
              email={business['email']}
              key={business['id']}/>
              ))
          }
          <EmptyCard />
       </main>
    </>
  )
}

export default Businesses