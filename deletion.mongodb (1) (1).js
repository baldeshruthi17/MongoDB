use ('E-Commerce');

//db.orders.deleteMany({status: "Delivered"});

//DELETE ANY ITEM WHICH HAS PRICE LESS THAN 20
db.Products.deleteMany({price: {$lt:20}});
