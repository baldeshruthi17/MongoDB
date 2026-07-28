use ('E-Commerce');
//db.Products.updateMany({category: "Electronics"},{$inc: {price:100}});

//db.Products.updateMany({category: "Electronics"},{$set: {stock:80}});

db.Products.updateMany({category: "Electronics"},{$set: {category : "IT Peripherals"}});