db.Orders.mapReduce(function () {
    this.order_items_id.forEach(function (item) {
        emit(item.$id, 1);
    });
}, function (key, values) {
    return Array.sum(values);
}, {out: 'top_products'});

db.top_products.find().sort({value : -1}).limit(5)