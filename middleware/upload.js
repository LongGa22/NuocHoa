const path = require("path");
const multer = require("multer");

// const TYPE_FILE_MAP = {
//     'image/png': 'png',
//     'image/jpeg': 'jpeg',
//     'image/jpg': 'jpg'
// }
// //storing files image to disk
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         const isValid = TYPE_FILE_MAP[file.mimetype];
//         let uploadError = new Error('invalid image type');

//         if(isValid) {
//             uploadError = null
//         }
//         cb(uploadError, './image')
//     },
//     filename: function (req, file, cb) {
//         const fileName = file.originalname.split(' ').join('-');
//         const extension = TYPE_FILE_MAP[file.mimetype];
//         cb(null, `${fileName} - ${Date.now()}.${extension}`)
//     }
// })

// const uploadOptions = multer({ storage: storage });
// module.exports = uploadOptions;

var store = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'image/')
    },
    filename: function(req, file, cb){
        // cb(null, Date.now() + "-" + file.originalname);
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var upload = multer({
    storage: store,
    fileFilter: function (req, file, callback){
        if(
            file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"
        ) {
            callback(null, true);
        }else{
            callback(null, false)
            // res.status(400).json({ error: error.message });
        }
    },
    limits:{
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload;