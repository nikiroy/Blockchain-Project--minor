const express = require("express")
const router = express.Router();
const coinController = require("../controllers/coinController")


router.get("/crypto", coinController.getCrypto )




module.exports = router;

// const express=require("express")
// const router=express.Router()
// const coinController=require("../controller/coinController")


// router.get("/crypto",coinController.getCrypto)

// router.all('/*',function (req,res){
//     res.status(400).send({ status:false, message: 'Invalid HTTP Request'})
// })
// module.exports = router;