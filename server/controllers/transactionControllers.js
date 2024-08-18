import fs from "fs";
import { uploadLedger } from "../utils/uploadFile.js";

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

    const { transaction, userDetails, receiver } = req.body;
    let transactionDetails = JSON.parse(transaction);
    const transactionId = transactionDetails.id;
    const {id,gst,name,type} = JSON.parse(userDetails);

    const allLedgers = fs.readFileSync("./db/ledgers.json", "utf-8");
    const ledgers = JSON.parse(allLedgers);
    
    //upload the ledger pdf to s3 bucket
    const ledgerUrl = await uploadLedger(req,res,gst);

    const uploader = {id,gst,name,type};
    let receivedBy = JSON.parse(receiver)
    receivedBy = {...receivedBy,id}

    //get the month from the transaction
    const month = new Date(transactionDetails.date).getMonth() + 1;
    const convertedMonth = months[month];


    const newTransaction = {
      id: transactionId,
      timestamp : new Date().toISOString(),
      transactionDetails,
      uploadedBy: uploader,
      receivedBy,
      ledgerUrl,
      fileType: req.file.mimetype,
      confirmations: {
        sender: "success",
        receiver: "pending",
      },
      month: convertedMonth,
    };

    ledgers.push(newTransaction);
    fs.writeFileSync("./db/ledgers.json", JSON.stringify(ledgers));

    res
      .json({
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
};

export const getLedgers = async (req, res) => {
  try {
    const user = req.user.userId;

    //fetching all the ledgers
    const allLedgers = fs.readFileSync("./db/ledgers.json", "utf-8");
    const ledgers = JSON.parse(allLedgers);

    //find the request user's gst 
    const businesses = fs.readFileSync("./db/businesses.json", "utf-8");
    const allBusinesses = JSON.parse(businesses);
    const requestMaker = allBusinesses.filter((business) => business.id === user)
    const callerGST = requestMaker[0].gst;

    //send only those ledgers that the user is involved in
    const userLedgers = ledgers.filter(
      (ledger) => 
      ledger.uploadedBy.gst === callerGST || ledger.receivedBy.gst === callerGST
    );

    res.json({
      status: "success",
      data: userLedgers,
      requester : requestMaker
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}

export const getTransaction = async (req, res) => {
  try {
    const allLedgers = fs.readFileSync("./db/ledgers.json", "utf-8");
    const ledgers = JSON.parse(allLedgers);

    const businesses = fs.readFileSync("./db/businesses.json", "utf-8");
    const allBusinesses = JSON.parse(businesses);

    const user = req.user.userId;
    const requestMaker = allBusinesses.filter((business) => business.id === user)[0]
    const {name, gst} = requestMaker
    const clientInfo = {name,gst}
    const { id } = req.params;

    const transaction = ledgers.filter(
      (ledger) => ledger.transactionDetails.id === id
    );

    transaction.push(clientInfo)
    

    res.json({
      status: "success",
      data: transaction,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}

export const patchTransaction = async (req, res) => {
  try {
    const allLedgers = fs.readFileSync("./db/ledgers.json", "utf-8");
    const ledgers = JSON.parse(allLedgers);
    const { id } = req.params;

    const transaction = ledgers.filter(
      (ledger) => ledger.transactionDetails.id === id
    );

    transaction[0].confirmations = {
      "sender" : "success",
      "receiver": "success"
    };

    fs.writeFileSync("./db/ledgers.json", JSON.stringify(ledgers));

    res.json({
      message: "Transaction updated successfully",
      
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}

export const deleteTransaction = async (req, res) => {
  try {
    const allLedgers = fs.readFileSync("./db/ledgers.json", "utf-8");
    const ledgers = JSON.parse(allLedgers);
    const { transactionId } = req.body;

    const newLedgers = ledgers.filter(
      (ledger) => ledger.transactionDetails.id !== transactionId
    );

    fs.writeFileSync("./db/ledgers.json", JSON.stringify(newLedgers));

    res.json({
      status: "success",
      message: "Transaction deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
}

