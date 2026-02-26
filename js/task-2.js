function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"

//const shippingOne = getShippingMessage("Australia", 120, 50);
//console.log(shippingOne);

//const shippingTwo = getShippingMessage('Germany', 80, 20);
//console.log(shippingTwo);

//const shippingThree = getShippingMessage('Sweden', 100, 20);
//console.log(shippingThree);

//const shippingFour = getShippingMessage('Ukrainian', 700, 50);
//console.log(shippingFour);
