import express from "express";
const router = express.Router();

//Controllers
import {
  getAllBusinesses,
  getAllBuyers,
  getAllSellers,
  getAllTransporters,
  getAllAgents,
  addBusiness,
  getMyBuyers,
  searchBusiness,
  getMySellers,
  getMyTransporters,
  getMyAgents,
} from "../controllers/businessControllers.js";

//Middlewares
import { isAdmin } from "../middlewares/isAdmin.js";
import { protect } from "../middlewares/protect.js";
import { singleUpload } from "../middlewares/multer.js";
import { uploadFile, uploadPDF } from "../utils/uploadFile.js";
import { addTransaction, getAllLedgers, getLedgers } from "../controllers/transactionControllers.js";

//Admin Routes
router.get("/all", protect, isAdmin, getAllBusinesses);
router.get("/buyers", protect, isAdmin, getAllBuyers);
router.get("/sellers", protect, isAdmin, getAllSellers);
router.get("/transporters", protect, isAdmin, getAllTransporters);
router.get("/agents", protect, isAdmin, getAllAgents);
router.get("/ledgers", protect, isAdmin, getAllLedgers);

//LoggedIn User Routes
router.post("/me/addBusiness", protect, addBusiness);
router.get("/me/search/:search", searchBusiness);
router.post("/me/addTransaction", singleUpload, addTransaction);
router.get("/me/ledgers", protect, getLedgers);

router.get("/me/buyers", protect, getMyBuyers);
router.get("/me/sellers", protect, getMySellers);
router.get("/me/transporters", protect, getMyTransporters);
router.get("/me/agents", protect, getMyAgents);


router.post("/upload", singleUpload, uploadFile);
router.post("/uploadpdf", singleUpload, uploadPDF);

export default router;
