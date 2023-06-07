// returns a price in selected currency, according to the exchange rate
// priceObject is an object or an array of objects
// priceObject: { amount: 100, divisor: 100} 
// priceObject: [ {amount: 100, divisor: 100}, {amount: 100, divisor: 100}]
// currencyRate is a rate between USD currency and selected currency

export const getPrice = (priceObject, currencyRate) => {
	let price = 0;
	if (Array.isArray(priceObject)) {
    for (let i in priceObject) {
      price += (priceObject[i].amount / priceObject[i].divisor) * currencyRate;
    }
  } else if (typeof priceObject === "object") {
    price = (priceObject.amount / priceObject.divisor) * currencyRate;
  }
	return price;
};

