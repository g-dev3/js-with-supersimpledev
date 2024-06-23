let toaster = 1899;

let basketball = 2095;

let shirt = 799;

let shiping = 499;

let totalItemWithShipping = (toaster + basketball + shirt + shiping) ;

let taxOnItem = Math.round(totalItemWithShipping * 0.1);

let OrderTotal = (totalItemWithShipping + taxOnItem) / 100;

console.log(OrderTotal);


let toasterremoved = totalItemWithShipping - toaster - shiping;

let taxinc = Math.round(toasterremoved * 0.1);

let completeOrder = (taxinc + toasterremoved) / 100

console.log(completeOrder);

// let removedtoaster = (basketball + shirt);

// let taxWithitem = Math.round(removedtoaster * 0.1);

// let TotalOrder = (removedtoaster + taxWithitem) / 100;

// console.log(TotalOrder);
