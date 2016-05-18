try {
   db.Orders.insert( [
      { "order_number": 12503,
        "date": ISODate("2015-03-14"),
        "total_sum": 750,
        "customer":
         {
            "name": "Daria",
            "surname": "Molochenko",
            "phones" : [380677065551, 380967897676],
            "address" : "PTI, Peremohy 37, Kyiv, UA"
         },
         "payment":{
             "card_owner" : "Daria Molochenko",
             "cardId" : 33456678
         },
         "order_items_id": [
            {
                "$ref" : "Products",
                "$id" : 10
            }, 
            {
                "$ref" : "Products",
                "$id" : 16
            },
            {
                "$ref" : "Products",
                "$id" : 11
            } 
          ]
        }
        ])        
         

} catch (e) {
   print (e);
}