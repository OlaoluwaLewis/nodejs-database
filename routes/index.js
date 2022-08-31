var express = require('express');
const multer  = require('multer');

var router = express.Router();


const upload = require("../middlewares/imageStorage");


const {
  loadProfilePicture,
  loadCatPicture 
} = require("../controllers/client");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


console.log(upload);

router
  .route('/upload-profile-pic')
  .post(upload.single("profile_pic"), loadProfilePicture)

router
  .route('/upload-cat-pics')
  .post(upload.array("cat_pics", 10), loadCatPicture)  

module.exports = router;
