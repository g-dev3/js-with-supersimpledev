let basketball = 2095

let tShirt = 799

let itemPrice = ((basketball * 1 )+ (tShirt * 1)) /100

let beforeTax = itemPrice 

let ShippingTotal = 0
console.log(`Items (${1 + 1}):  $${itemPrice}`);

console.log(`Shipping & handling:  $${ShippingTotal}`);

console.log(`Total before tax:  $${beforeTax}`);

console.log(`Estimated tax (10%):  ${Math.round((beforeTax* 100 ) * .1)/100}`);