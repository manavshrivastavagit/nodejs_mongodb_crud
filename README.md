# nodejs_mongodb_crud (created on 23 Nov 2018)
nodejs mongodb express crud operation
Mongodb URL: mongodb://user:password123@ds115094.mlab.com:15094/commodity

# To Start express server:
npm start

# API Endpoint:
http://localhost:3000/commodity/1234 

{"id":1234,
"name":"oil_1234_modified",
"current_price":{"value": 1.234,"currency_code":"INR",
"commodity_desc":"Oil 1234"}}

# Basic Auth credential:
username : admin
password : supersecret

# API Controller: 
/* CRUD commodity APIs. */

router.post('/create', commodity_controller.commodity_create);

router.get('/:id', commodity_controller.commodity_get_by_id);

router.get('/', commodity_controller.commodity_get_all_commodities);

router.put('/:id', commodity_controller.commodity_update_by_id);

router.delete('/:id', commodity_controller.commodity_delete_by_id);
