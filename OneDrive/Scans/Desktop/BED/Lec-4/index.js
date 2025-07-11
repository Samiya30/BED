let products = [
    {
        name:"samsung",
        amount:70000,
        quantity:10
    },
        {
        name:"Iphone 16",
        amount:10000,
        quantity:1
    }
];
let account_balance = 200000;
buyProduct("Iphone 16",function(err,amount){
    //some async operations
    //1. get product detail from product db
    //2. write order details in user db
    if(err) return console.log(err)
    console.log(amount)
    deductAmount(amount,function(err,message){
        if(err) return console.log(err);
        console.log(message)
    });
})
function buyProduct (product_name, cb) {
    let isAvailable = null;
     //implement for loop to find product in an array
    //find product onject from product array who's name is equal to product_name
    for (let i = 0; i < products.length; i++) {
        if(products[i].name == product_name){
            isAvailable = products[i];
        }
    }
    if(!isAvailable){
        cb("product is not available",null)
    } else {
        cb(null,isAvailable.amount)
    }
}

function deductAmount(amount, cb){
    if(account_balance < amount){
       cb("your account balance is low",null)
    }else {
         account_balance = account_balance-amount;
         cb(null,"product purchased")
    }
}


//problems in callback
// 1. callback hell
// 2. no control over codes
