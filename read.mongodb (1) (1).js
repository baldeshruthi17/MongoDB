use ('E-Commerce');

//db.Products.find({category:"Electronics"});

//db.Products.find({price:{$lt : 20}});

//db.Products.find({$and: [{ category: "Home" },{ price: { $lt: 20 } }]});

//db.Products.find({price:{$lt: 20}},{name : 1,stock:1});

//db.Products.find({price:{$lt: 20}},{_id :0 ,stock:1}); (projection)

//db.Products.find({price:{$lt: 20}}).sort({price: 1}); (sorting)

//db.Products.find({price:{$lt: 20}}).sort({price: -1});

//(highest)  db.Products.find({}, { _id: 0, price: 1, stock: 1 }).sort({ price: -1 }).limit(1);

db.Products.find({}, { _id: 0, price: 1, stock: 1 }).sort({ price: -1 }).limit(4).skip(2);