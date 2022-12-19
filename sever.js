const { default: axios } = require('axios');
const cors = require('cors')
const express = require('express');
const app = express();
const path = require("path");

app.use(cors());
app.use(express.static('public'));


app.get("/api/postshipping-tracks", async (req, res) => {
    const _referenceNumber = req.query['ReferenceNumber'];
    const headers = req.headers || [];
    const {data} = await axios.get(`https://api.postshipping.com/api2/tracks?ReferenceNumber=${_referenceNumber}`, {
        headers: {
            Token: headers['token'],
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    });
    
    res.send(data);
});



const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log('Server startd on port 5000'));