// THIS IS THE CENTRAL HUB FOR OUR APIROUTES FOLDER, BEFORE THEY GET CALLED

const express = require('express');
const router = express.Router(); 

router.use(require('./candidatesRoutes')); //THIS WILL CALL OUR CANDIDATES ROUTES

router.use(require('./partyRoutes'))  //THIS WILL CALL OUR party ROUTES

router.use(require('./voterRoutes'))

router.use(require('./voteRoutes'))

module.exports = router;

