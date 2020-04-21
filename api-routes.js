let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API is Working',
        message: 'By Anton Pogrebenko'
    });
});

var instrumentController = require('./controllers/instrumentController');
// Contact routes
router.route('/instruments')
    .get(instrumentController.index)
    .post(instrumentController.new);
router.route('/instruments/:instruments_id')
    .delete(instrumentController.delete);
module.exports = router;