import axios from "axios";


export const getLedgers = async (clientDomain: any) => {
    try{
        const res = await axios.get(`${clientDomain}/me/ledgers`,{withCredentials:true});
        if(res){
            console.log(res.data)
            return res.data.data
        }
    }catch(err : any){
        console.log(err)
    }
}
     