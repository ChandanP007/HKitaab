import axios from "axios";

export const patchTransaction = async (clientDomain: any,id: any) => {
    try{
        const res = await axios.patch(`${clientDomain}/me/transaction/${id}`, {withCredentials:true});
        if(res){
            // console.log(res)
            return res.data.data
        }
    }catch(err : any){
        console.log(err)
    }
}
