let toaster = 18.99

let basketball = 20.95

let shirt = 7.99

let shiping = 4.99

let totalItemWithShipping = ((toaster + basketball + shirt) + shiping) * 100

let taxOnItem = Math.round(totalItemWithShipping * .1)

console.log(taxOnItem / 100);