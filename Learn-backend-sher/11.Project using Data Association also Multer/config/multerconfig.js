const multer  = require('multer')
const crypto = require('crypto');
const path = require('path');

// FIRST SETUP MULTER DISK STORAGE
// Disk storage for Multer -> The disk storage engine gives you full control on storing files to disk.

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, function(err, bytes){
        // consol.log(bytes.toString('hex'));
        const fn = bytes.toString('hex') + path.extname(file.originalname);
        cb(null, fn);
    })
  }
})

// EXPROT UPLOAD VARIABLE

const upload = multer({storage: storage});

module.exports = upload;


// // ________________________________________________

// // MULTER use in backend file
// app.post('/upload', upload.single("image"), (req, res)=>{
//     console.log(req.file);
    
// });

// app.get('/text', (req, res)=>{
//     res.render('text');
// });

// // _________________________