import axios from "axios";

export const useRegister = async (
  businessDetails: any,
  loginCreds: any,
  uploadedFile: any,
  clientDomain: any
) => {

  //image uploaded by user    
  const formData = new FormData();
  formData.append("file", uploadedFile);
  formData.append("businessDetails", JSON.stringify(businessDetails));
  formData.append("loginCreds", JSON.stringify(loginCreds));

  const response = await axios.post(
    `${clientDomain}/register`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        
      },
      withCredentials: true
    },
  );
  // console.log(response.data);
  
  return response.data;

};
