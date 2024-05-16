import fs from "fs";
import { generateId } from "../utils/generateId.js";
import { uploadPDF } from "../utils/uploadFile.js";


// Transaction and Ledgers management
export const addTransaction = async (req, res) => {
  try {
    
   const months = { 
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
    };


    const ledgerPDF = await uploadPDF(req,res);
    const { transaction, userDetails, receiver } = req.body;
    const { gst, name, type } = userDetails;
    const uploadedBy = {
      gst,
      name,
      type,
    };

    const allLedgers = fs.readFileSync("./db/ledgers.json", "utf-8");
    const ledgers = JSON.parse(allLedgers);
    let transactionDetails = JSON.parse(transaction);

    //get the month from the transaction
    const month = new Date(transactionDetails.date).getMonth() + 1;
    const convertedMonth = months[month];


    const newTransaction = {
      id: generateId(15),
      transactionDetails,
      uploadedBy,
      receivedBy: JSON.parse(receiver),
      ledgerPDF,
      confirmations: {
        sender: "success",
        receiver: "pending",
      },
      month: convertedMonth
    };
    ledgers.push(newTransaction);
    fs.writeFileSync("./db/ledgers.json", JSON.stringify(ledgers));

    res.json({
        status: "success",
        data: {
          newTransaction,
          
        },
      })
      .status(200);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}
export const getLedgers = async (req, res) => { 
    try {
        const allLedgers = fs.readFileSync("./db/ledgers.json", "utf-8");
        const ledgers = JSON.parse(allLedgers);
        res.json({
        status: "success",
        data: ledgers,
        });
    } catch (err) {
        res.status(500).json({
        status: "error",
        message: err.message,
        });
    }
}
