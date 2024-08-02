import axios from "axios";

export const addTransaction = async (
  transaction: any,
  file: any,
  clientDomain: any,
  user: any,
  receiver : any
) => {
  //image uploaded by user
  const formData = new FormData();
  formData.append("file", file);
  formData.append("transaction", JSON.stringify(transaction));
  formData.append("userDetails",JSON.stringify(user));
  formData.append("receiver",JSON.stringify(receiver));

  const response = await axios.post(
    `${clientDomain}/me/addTransaction`,
    formData,
    {withCredentials: true,}
    )
  console.log(response);

  if(response.status === 200){
    alert("Transaction added successfully");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
