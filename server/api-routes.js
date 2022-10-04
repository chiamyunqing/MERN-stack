const router = require('express').Router();
const controller = require('./controller');

router.route('/getUsers').get(controller.getUsers);
router.route('/addUser').post(controller.addUser);

module.exports = router;
