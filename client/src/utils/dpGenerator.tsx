

// This function generates a random dp for the user

export const generateDp = (username:string,random?:boolean) => {
  return `https://ui-avatars.com/api/?name=${username}&background=${random ? "random" : "505050"}`;
};



