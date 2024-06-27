let basketball = 2095

let tShirt = 799

let shipping = 499

let itemPrice = ((basketball * 2 )+ (tShirt * 2)) /100

let ShippingTotal = (shipping * 2)/100

let beforeTax = itemPrice + ShippingTotal

console.log(`Items (${2 + 2}):  $${itemPrice}`);

console.log(`Shipping & handling:  $${ShippingTotal}`);

console.log(`Total before tax:  $${beforeTax}`);
