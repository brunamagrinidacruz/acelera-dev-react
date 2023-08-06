const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

//Return the productsList especified in array ids
function getProducts(ids, productsList) {
	return productsList.filter((product) => {
		for(let i = 0; i < ids.length; i++) 
			if(product.id == ids[i]) return true;
		return false;
	})
}

//Return the index in the array of promotions the promotions to the productsList
function selectPromotion(productsList) {
	let listOfCategories = productsList.reduce((value, product, index) => {
		let newValue = {...value};
		//Count that on more category appers in the productsList
		if(newValue[product.category].length == 0) newValue.countDifferentCategories++;
		//Add the product to the list of its category
		newValue[product.category].push(product)
		return newValue;
	}, {
		countDifferentCategories: 0, //Keeps a count of how many differents categories are in the productsList
		"T-SHIRTS": [],
		"PANTS": [],
		"SHOES": [],
		"BAGS": [], 
	})
	if(listOfCategories.countDifferentCategories == 1) return 0 //SINGLE LOK
	if(listOfCategories.countDifferentCategories == 2) return 1 //DOUBLE LOOK
	if(listOfCategories.countDifferentCategories == 3) return 2 //TRIPLE LOOK
	if(listOfCategories.countDifferentCategories == 4) return 3 //FULL LOOK
}

//Return the total price without discounts
function getTotalPriceWithoutDiscount(productList) {
	return parseFloat(productList.reduce((value, product) => {
		return value + product.regularPrice;
	}, 0).toFixed(2));
}

//Return the total price with discounts
function getTotalPriceWithDiscount(productList, promotion) {
	let totalPriceWithDiscount = 0;
	/*
		For each product, we will look in its promotions array by [promotion]
		When founds the promotions, increment totalPriceWithDiscount 
	*/
	productList.map((product) => {
		let hasPromotion = false;
		let productPromotion = product.promotions;
		for(let i = 0; i < productPromotion.length; i++) {
			if(productPromotion[i].looks.includes(promotion)) {
				totalPriceWithDiscount +=  productPromotion[i].price;
				hasPromotion = true;
				break;
			}
		}
		if(!hasPromotion) totalPriceWithDiscount += product.regularPrice;
	})
	return parseFloat(totalPriceWithDiscount.toFixed(2));
}

//Returns the discount in percentage
function calculePercentage(totalPrice, discountValue) {
	return ((discountValue * 100) / totalPrice).toFixed(2);
}

//Create the final object
function createShoppingCart(productsList, promotion, totalPrice, discountValue, discountPercentage) {
	let listOfProducts = productsList.reduce((value, product) => {
		let newValue = [...value];
		newValue.push({
			name: product.name,
			category: product.category
		})
		return newValue;
	}, [])
	return {
		products: listOfProducts,
		promotion: promotions[promotion],
		totalPrice: `${totalPrice}`,
		discountValue: `${discountValue}`,
		discount: `${discountPercentage}%`
	}
}

function getShoppingCart(ids, productsList) {
	const products = getProducts(ids, productsList);
	const promotion = selectPromotion(products);

	const totalPriceWithoutDiscount = getTotalPriceWithoutDiscount(products);
	const totalPriceWithDiscount = getTotalPriceWithDiscount(products, promotions[promotion]);
	const totalDiscount = totalPriceWithoutDiscount - totalPriceWithDiscount;

	const discountPercentage = calculePercentage(totalPriceWithoutDiscount, totalDiscount);

	return createShoppingCart(products, promotion, totalPriceWithDiscount, totalDiscount.toFixed(2), discountPercentage);
}

module.exports = { 
	getShoppingCart,
	/*getProducts,
	selectPromotion,
	getTotalPriceWithoutDiscount,
	getTotalPriceWithDiscount,
	calculePercentage*/
 };
