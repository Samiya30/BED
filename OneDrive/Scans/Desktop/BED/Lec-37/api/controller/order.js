const OrderBook=require("../service/orderbook")
const ob=new OrderBook("BTCUSD")    //object of orderbook

let {publisher}=require("../../shared/index")
module.exports.postPlaceOrder=async (req,res)=>{
    //user,quantity,type,price,side
    let {type,side,price,quantity,username}=req.body;
    
    //basic validation
    if (!type || !side || !price || !quantity || !username) {
    return res.json({ error: "Missing required fields" });
    }
    let response=ob.placeOrder(price,quantity,type,side,username)
    await publisher.connect()
    await publisher.PUBLISH("book:update",JSON.stringify(response.book))
    // console.log(response)
}