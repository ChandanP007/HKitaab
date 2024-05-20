import axios from "axios";

export const addTransaction = async (
  transaction: any,
  file: any,
  clientDomain: any
) => {
  //image uploaded by user
  const formData = new FormData();
  formData.append("file", file);
  formData.append("transaction", JSON.stringify(transaction));

  const response = await axios.post(
    `${clientDomain}/me/addTransaction`,
    formData,
    {withCredentials: true,}
    )
  console.log(response); 
};
