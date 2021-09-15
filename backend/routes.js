const router = require('express').Router();
const buildingPermit = require('./building-permit-model');
const marriagePermit = require('./marriage-permit-model');

router.route('/building-permit').post((req, res) => {
    const newPermit = new buildingPermit(req.body);
    newPermit.save()
    .then(user => res.status(200).json())
    .catch(err => res.send(400).json())
});

router.route('/marriage-permit').post((req, res) => {
    const newPermit = new marriagePermit(req.body);
    newPermit.save()
    .then(user => res.status(200).json())
    .catch(err => res.send(400).json())
});

module.exports = router;