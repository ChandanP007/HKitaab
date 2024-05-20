import axios from "axios";


export const getLedgers = async (clientDomain: any, userrole: any) => {
    try{
        if(userrole === 'admin'){
            const res = await axios.get(`${clientDomain}/ledgers`,{withCredentials:true});
            if(res){
                // console.log('admin')
                console.log(res.data.data)
                return res.data.data
            }
        }
        const res = await axios.get(`${clientDomain}/me/ledgers`,{withCredentials:true});
        if(res){
            console.log(res.data.data)
            return res.data.data
        }
    }catch(err : any){
        console.log(err)
    }
}
