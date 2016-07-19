var multer = require("multer");
var upload = multer();

module.exports = function(app) {
    app.post('/get-file-size', upload.single('upl'), function(req, res){
        console.log(req.file);
        if(req.file === undefined) {
            res.status(400).send("Make sure to upload file.");
        } else {
            res.json({
                size: req.file.size
            });
        }
    });
}