const multer = require("multer");

const path = require("path");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(null, "../frontend/src/images");
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      path.parse(file.originalname).name +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: fileStorage });

module.exports = upload;
