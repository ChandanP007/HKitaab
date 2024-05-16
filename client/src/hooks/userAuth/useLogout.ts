import axios from "axios"

export const useLogout  = async(clientDomain:any) => {
    try{
        await axios.get(`${clientDomain}/logout`, {withCredentials: true})
        window.location.reload();
    }catch(err){
        console.log(err)
    }
    // window.location.reload();
}