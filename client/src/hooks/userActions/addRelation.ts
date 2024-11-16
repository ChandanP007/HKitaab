import axios from "axios";


export const addRelation = async (data:any, clientDomain:any) => {
    try{
        if(!data || (data.name == "" || data.gstno == "")) return alert("Fields are required")
        const res = await axios.post(`${clientDomain}/me/addBusiness`, data, {withCredentials: true});
        console.log(res)
        alert(res.data.message)
        // toast.success(res.data.message)
    }catch(err : any){
        alert(err.response.data.message);

        // toast.error(err.response.data.message)
    }
}