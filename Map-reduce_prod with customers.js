db.Orders.mapReduce(
        function () 
        {
            var name = this.payment.card_owner;
            this.order_items_id.forEach(function (item){
                emit(item.$id, name)});
        },
        function (key, value) 
        { 
            return {
                customers: value.map(function(item){
                    return item})};
            
        }, 
        {out: 'customers_for_each_prod'});
        
db.customers_for_each_prod.find();
       
//db.customers_for_each_prod.find({$where: "this.value.customers.length > 1"});   
