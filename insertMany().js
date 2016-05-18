try {
   db.Products.insertMany( [
      { _id: 10, "model": "IPhone 6", "type": "Phone", "producer": "Apple", "screen_d": 6, "price": 600 },
      { _id: 11, "model": "IPhone 7", "type": "Phone", "producer": "Apple", "screen_d": 7, "price": 700 },
      { _id: 12, "model": "IPhone 5", "type": "Phone", "producer": "Apple", "screen_d": 5, "price": 500 },
      { _id: 13, "model": "IPhone 4", "type": "Phone", "producer": "Apple", "screen_d": 4, "price": 400 },
      { _id: 14, "model": "Aspire 5376G", "type": "Laptop", "producer": "Acer", "screen_d": 15.6, "price": 300 },
      { _id: 15, "model": "TravelMate P253", "type": "Laptop", "producer": "Acer", "screen_d": 15.6, "price": 350 },
      { _id: 16, "model": "Extensa EX", "type": "Laptop", "producer": "Acer", "screen_d": 13, "price": 200 },
      { _id: 17, "model": "Aspire ES1", "type": "Laptop", "producer": "Acer", "screen_d": 11.6, "price": 370 },
      { _id: 18, "model": "Predator G9", "type": "Laptop", "producer": "Acer", "screen_d": 17.3, "price": 3000 },
   ] );
} catch (e) {
   print (e);
}