import axios from "axios";



export const useLogin = async(input:any,clientDomain:any)=> {


    try{
        const response = await axios.post(`${clientDomain}/login`, 
        {email: input.email,password: input.password},
        {withCredentials: true}
        );

        if(response.status === 200){
            alert("Login Success");
            return {status: 200, msg: "Login Success"};
        }else{
            return {msg: "Invalid Credentials"};
        }

    }
    catch(err){
        return {
            status: 500,
            response: {
                data: {
                    message: "Invalid Credentials"
                }
            }
        }
    }

}
