let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

is_shop_open=true;

let order = ( time, work ) => {

    return new Promise( ( resolve, reject )=>{
  
      if( is_shop_open ){
        setTimeout(()=>{
             resolve( work() )
            }, time)
      }
  
      else{
        reject( console.log("Our shop is closed") )
      }
    })
  }
  
  order(2000,()=>{console.log("Order placed. Please call production")}) 
  .then(()=>{
    return order(2000,()=>{ console.log(`${stocks.Fruits[0]} was selected..`)})
  })
  .then(()=>{
      return order(1000,()=>{console.log(`${stocks.Fruits[0]} was chopped..`)})
  })
  .then (()=>{
  return order(1000,()=>{console.log(`${stocks.liquid} added`)})
  })
  .then(()=>{
     return order(1000,()=>{ console.log(`bhmmmmmmmmmmmmmmmmmmmm`)})
  })
  .then(()=>{
   return order(2000,()=>{console.log(`hold ice cream on ${stocks.holder[2]} `)})
  })
  .then (()=>{
      return order(3000,()=>{console.log(` ${stocks.toppings[1]} toppings added `)})
  })
  .then(()=>{
  return order(2000,()=>{console.log(` take your ice cream.... `)})
  })