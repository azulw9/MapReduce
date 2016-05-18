//number of products of EACH Producer
/*db.Products.mapReduce(
        function () {emit(this.producer, 1)},
        function (key, value) {return Array.sum(value)}, 
        {out: 'producers_counts'});
        
db.producers_counts.find();
*/

//total price of products for EACH Producer
/*db.Products.mapReduce(
        function () {emit(this.producer, this.price)},
        function (key, value) {return Array.sum(value)}, 
        {out: 'producers_sum'});
        
db.producers_sum.find();
*/

//sum of all orders of EACH customer
/*db.Orders.mapReduce(
        function () 
        { 
            var key = {name: this.customer.name, surname: this.customer.surname};
            emit(key, this.total_sum)},
        function (key, value) {return Array.sum(value)}, 
        {out: 'order_sum'});
        
db.order_sum.find();
*/

//total sum of orders of EACH customer in some period of time
/*db.Orders.mapReduce(
        function () 
        { 
            var key = {name: this.customer.name, surname: this.customer.surname};
            this.date > new Date ('2015-02-01') && this.date < new Date ('2015-04-01') && emit(key, this.total_sum)},
        function (key, value) {return Array.sum(value)}, 
        {out: 'order_sum_for_date'});
        
db.order_sum_for_date.find();
*/

//avg order price
/*db.Orders.mapReduce(
        function () 
        {
            emit('Avg price of order', this.total_sum)
        },
        function (key, value) 
        {
            return Array.avg(value)
        }, 
        {out: 'avr_order_price'});
        
db.avr_order_price.find();
*/

// numb_of_orders_for_each_prod
/*db.Orders.mapReduce(
        function () 
        {
            this.order_items_id.forEach(function (item){
                emit(item.$id, 1)});
        },
        function (key, value) 
        { 
            return Array.sum(value)
        }, 
        {out: 'numb_of_orders_for_each_prod'});
        
db.numb_of_orders_for_each_prod.find();
*/


