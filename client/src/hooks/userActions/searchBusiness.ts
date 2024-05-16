import axios from "axios";

export const searchBusiness = async (search:any, clientDomain:any) => {
    try{
        // search = JSON.stringify(search);
        const res = await axios.get(`${clientDomain}/me/search/${search}`, { withCredentials: true})
        if(res){
            return res.data.found;
        }
    }catch(err){
        console.log("No results");
        // console.log(err);
    }
}