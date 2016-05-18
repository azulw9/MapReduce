db.Orders.mapReduce(function () {
    this.order_items_id.forEach(function (item) {
        emit(item, 1);
    });
}, function (key, values) {
    return Array.sum(values);
}, {out: 'top_products'});

db.top_products.find().sort({value : -1}).limit(5).map(function(item)
{
    return {
        item: item._id.fetch().model,
        count: item.value
    };
})
