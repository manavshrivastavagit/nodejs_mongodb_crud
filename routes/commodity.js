var express = require('express');
var router = express.Router();
var commodity_controller = require('../controller/commodity')

/* CRUD commodity APIs. */

router.post('/create', commodity_controller.commodity_create);

router.get('/:id', commodity_controller.commodity_get_by_id);

router.get('/', commodity_controller.commodity_get_all_commodities);

router.put('/:id', commodity_controller.commodity_update_by_id);

router.delete('/:id', commodity_controller.commodity_delete_by_id);


module.exports = router;
