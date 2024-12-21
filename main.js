const menu = [

    {name:"Turkish Coffee",price:7},
    {name:"Lobster Thermidor",price:52},
    {name:"Pizza",price:30},
    {name:"Spaghetti",price:30},
    {name:"Pomelo Salad",price:15},
    {name:"Espresso affogato",price:10},
    {name:"Burger",price:35},
    {name:"Water",price:2.5},
    {name:"steak",price:70}
  ];

  let receipts = [];

  function orderCreation() {
    let orderLength = Math.floor(Math.random() * 5 + 1);
  
    const order = [];
  
    for (let i = 0; i < orderLength; i++) {
      const item = Math.floor(Math.random() * menu.length);
      order.push(menu[item]);
    }
  
    return order;
  }
  
  function receiptCalculation(order) {
    let subtotal = order.reduce((acc, cur) => acc + cur.price, 0);
    let discount = subtotal > 50 ? subtotal * 0.1 : 0;
    let tip = subtotal * 0.15;
    let total = subtotal - discount + tip;
    const receipt = {
      items: order,
      subtotal: subtotal.toFixed(2),
      discount: discount.toFixed(2),
      tip: tip.toFixed(2),
      total: total.toFixed(2),
    };
  
    return receipt;
  }
  
  function receiptLogger(receipt) {
    console.log("_______");
    receipt.items.forEach((item, index) => {
        console.log(`${index + 1}- ${item.name} ${item.price}$`);

    });
    console.log("-------------");
    console.log(`Subtotal: ${receipt.subtotal}$`);
    receipt.discount != 0 ? console.log(`Discount: ${receipt.discount}$`) : "";
    console.log(`tip: ${receipt.tip}$`);
    console.log(`Total: ${receipt.total}$`);
    console.log("_______");
  }
  
  function start() {
    const order = orderCreation();
    let receipt = receiptCalculation(order);
    receipts.push(receipt);
    receiptLogger(receipt);
  
    if (receipts.length === 2) {
      setTimeout(() => {
        const order = receipts[1].items;
        const newItem = menu[Math.floor(Math.random() * menu.length)];
        order.push(newItem);
  
        receipt = receiptCalculation(order);
        receipts[1] = receipt;
        console.log("receipt number 1 modified");
        receiptLogger(receipt);
      }, 1000 * 60 * 2);
    }
  }
  
  start();
  setInterval(start, 1000 * 60 * 5);
  
  