var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_db"
  });

  connection.connect(function(err){
      if (err) throw err;
      allProducts();
  });
 function allProducts(){
     connection.query("SELECT * from products", function(err,res){
         if (err) throw err;
         inquirer
         .prompt([
             {
             name: "productChoice",
             type: "input",
             message: "What is the id of the product you would like to buy?",
             choices: console.table(res),
             validate: function(value){
                 if (isNaN(value) == false){
                     return true;
                 }else{
                     return false;
                 }
             }
         },
         {
             name: "quantity",
             type: "number",
             message: "How much do you want?",
             validate: function(value){
                 if(isNaN(value) == false){
                     return true;
                 }else {
                     return false;
                 }
             }
         }
        ])
        .then (function(answer){
            var productId = answer.productChoice - 1;
            var chosenProduct = res[productId];
            var productQuantity = answer.quantity;

            if (productQuantity < chosenProduct.stock_quantity){
                console.log("Your total is " + "(" + answer.quantity + ")" + "-" + chosenProduct.product_name + " is: " + chosenProduct.price.toFixed(2) * productQuantity);
                connection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantity: chosenProduct.stock_quantity - productQuantity
                }, {
                    item_id: res[productId].item_id
                }], function(err, res){
                    if (err) throw err;
                })
            }else{
                console.log("Sorry, quantity is too low! We only have " + res[productId].stock_quantity + "in stock!");
            }
        })
    })
}

         
     
 
 
    
      
