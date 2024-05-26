import axios from 'axios';
import {createContext, useContext, useEffect, useState} from 'react';


export const ActiveActionContext = createContext<any>(null);

export const useActiveActionContext = ():any => { 
    return useContext(ActiveActionContext);
}


export const ActiveActionProvider = ({children}:any) => {

    //client domain
    const [clientDomain] = useState('http://localhost:3000/api/business')

    const [Selected, setSelected] = useState<any>({
        buyers: true,
        sellers: false,
        transporters: false,
        agents: false,
        services: false
    })
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    let [user, setUser] = useState<any>({
        
    })


    const fetchUserData = async () => {
        try {
          if(user === null || user === undefined || user === ''){
            return;
          }
          const res = await axios.get(`${clientDomain}/me`,{withCredentials: true});
          setUser(res.data);
          setIsLoggedIn(true);
        } catch (err) {
          console.log(err)
          
        }
      }
    useEffect(() => {
    fetchUserData();

    }, []);

    return <ActiveActionContext.Provider value={{Selected, setSelected, isDialogOpen, setDialogOpen, clientDomain, user, isLoggedIn}}>
        {children}
    </ActiveActionContext.Provider>
}

