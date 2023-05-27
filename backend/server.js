const express = require('express');
const app = express();
const cors = require('cors');
const errorController = require('./shared/errorController');

//cors implementation
app.use(cors());

//upload a file service
app.post("/upload", (req, res) => {
    setTimeout(() => {
        console.log('file uploaded')
        return res.status(200).json({ result: true, msg: 'file uploaded' });
    }, 1000);
});

//delete a file service
app.delete("/upload", (req, res) => {
    console.log(`File deleted`)
    return res.status(200).json({ result: true, msg: 'file deleted' });
});

//error controller
app.use(errorController);

//server
async function server() {
    try {
        app.listen(8080, () => {
            console.log(`Server is running at port: 8080`);
        });
    } catch (err) {
      process.exit(1);
    }
  }
  
server();