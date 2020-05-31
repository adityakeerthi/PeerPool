const express = require('express');
const router = express.Router();
const ethers = require('ethers');
const { abi, address } = require('../smartContractInfo');

const URL = 'HTTP://127.0.0.1:7545';
const customHttpProvider = new ethers.providers.JsonRpcProvider(URL);
let CONTRACT = new ethers.Contract(address, abi, customHttpProvider.getSigner(0));

router.post('/', async function (req, res, next) {
    result = await Contract.clearPendingStatus(req.body.address);
    res.send(`Set Driver Confirmation`);
})

module.exports = router;