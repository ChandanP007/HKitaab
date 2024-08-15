import axios from "axios";

export const getTransaction = async (clientDomain: any,id: any) => {
    try{
        const res = await axios.get(`${clientDomain}/me/transaction/${id}`, {withCredentials:true});
        if(res){
            // console.log(res.data)
            return res.data.data
        }
    }catch(err : any){
        console.log(err)
    }
}
