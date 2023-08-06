const { products } = require('../src/data/products');
const {  
	getProducts, 
	selectPromotion, 
	getTotalPriceWithoutDiscount, 
	getTotalPriceWithDiscount,
	calculePercentage
} = require('../src');

const mock1 = [
	{
		"id": 120,
		"name": "DISNEY CRUELLA© T-SHIRT",
		"category": "T-SHIRTS",
		"regularPrice": 114.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK", "DOUBLE LOOK"],
			"price": 109.99
		  },
		  {
			"looks": ["TRIPLE LOOK", "FULL LOOK"],
			"price": 99.99
		  }
		]
	},
	{
		"id": 230,
		"name": "KNIT JOGGING PANTS",
		"category": "PANTS",
		"regularPrice": 174.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK"],
			"price": 174.99
		  },
		  {
			"looks": ["DOUBLE LOOK"],
			"price": 154.99
		  },
		  {
			"looks": ["TRIPLE LOOK", "FULL LOOK"],
			"price": 144.99
		  }
		]
	},
	{
		"id": 310,
		"name": "ASYMMETRICAL LEATHER SLIDE HEELS",
		"category": "SHOES",
		"regularPrice": 89.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"],
			"price": 79.99
		  }
		]
	},
	{
		"id": 490,
		"name": "SOFT FLAP BACKPACK",
		"category": "BAGS",
		"regularPrice": 99.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"],
			"price": 79.99
		  }
		]
	}
];

const mock2 = [
	{
		"id": 120,
		"name": "DISNEY CRUELLA© T-SHIRT",
		"category": "T-SHIRTS",
		"regularPrice": 114.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK", "DOUBLE LOOK"],
			"price": 109.99
		  },
		  {
			"looks": ["TRIPLE LOOK", "FULL LOOK"],
			"price": 99.99
		  }
		]
	},
	{
		"id": 230,
		"name": "KNIT JOGGING PANTS",
		"category": "T-SHIRTS",
		"regularPrice": 174.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK"],
			"price": 174.99
		  },
		  {
			"looks": ["DOUBLE LOOK"],
			"price": 154.99
		  },
		  {
			"looks": ["TRIPLE LOOK", "FULL LOOK"],
			"price": 144.99
		  }
		]
	},
	{
		"id": 310,
		"name": "ASYMMETRICAL LEATHER SLIDE HEELS",
		"category": "PANTS",
		"regularPrice": 89.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"],
			"price": 79.99
		  }
		]
	},
	{
		"id": 490,
		"name": "SOFT FLAP BACKPACK",
		"category": "PANTS",
		"regularPrice": 99.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"],
			"price": 79.99
		  }
		]
	}
];

const mock3 = [
	{
		"id": 120,
		"name": "DISNEY CRUELLA© T-SHIRT",
		"category": "T-SHIRTS",
		"regularPrice": 114.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK", "DOUBLE LOOK"],
			"price": 109.99
		  },
		  {
			"looks": ["TRIPLE LOOK", "FULL LOOK"],
			"price": 99.99
		  }
		]
	},
	{
		"id": 230,
		"name": "KNIT JOGGING PANTS",
		"category": "T-SHIRTS",
		"regularPrice": 174.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK"],
			"price": 174.99
		  },
		  {
			"looks": ["DOUBLE LOOK"],
			"price": 154.99
		  },
		  {
			"looks": ["TRIPLE LOOK", "FULL LOOK"],
			"price": 144.99
		  }
		]
	},
	{
		"id": 310,
		"name": "ASYMMETRICAL LEATHER SLIDE HEELS",
		"category": "T-SHIRTS",
		"regularPrice": 89.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"],
			"price": 79.99
		  }
		]
	},
	{
		"id": 490,
		"name": "SOFT FLAP BACKPACK",
		"category": "T-SHIRTS",
		"regularPrice": 99.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"],
			"price": 79.99
		  }
		]
	}
];

const mock4 = [
	{
		"id": 120,
		"name": "DISNEY CRUELLA© T-SHIRT",
		"category": "T-SHIRTS",
		"regularPrice": 114.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK", "DOUBLE LOOK"],
			"price": 109.99
		  },
		  {
			"looks": ["TRIPLE LOOK", "FULL LOOK"],
			"price": 99.99
		  }
		]
	},
	{
		"id": 230,
		"name": "KNIT JOGGING PANTS",
		"category": "T-SHIRTS",
		"regularPrice": 174.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK"],
			"price": 174.99
		  },
		  {
			"looks": ["DOUBLE LOOK"],
			"price": 154.99
		  },
		  {
			"looks": ["TRIPLE LOOK", "FULL LOOK"],
			"price": 144.99
		  }
		]
	},
	{
		"id": 310,
		"name": "ASYMMETRICAL LEATHER SLIDE HEELS",
		"category": "SHOES",
		"regularPrice": 89.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"],
			"price": 79.99
		  }
		]
	},
	{
		"id": 490,
		"name": "SOFT FLAP BACKPACK",
		"category": "PANTS",
		"regularPrice": 99.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"],
			"price": 79.99
		  }
		]
	}
];

const mockDoubleLook = [
	{
		"id": 130,
		"name": "RUBBERIZED PRINTED T-SHIRT",
		"category": "T-SHIRTS",
		"regularPrice": 144.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK", "DOUBLE LOOK"],
			"price": 139.99
		  },
		  {
			"looks": ["TRIPLE LOOK", "FULL LOOK"],
			"price": 129.99
		  }
		]
	},
	{
		"id": 140,
		"name": "CONTRAST SLOGAN T-SHIRT",
		"category": "T-SHIRTS",
		"regularPrice": 149.99,
		"promotions": [
		  {
			"looks": ["TRIPLE LOOK", "FULL LOOK"],
			"price": 129.99
		  }
		]
	},
	{
		"id": 230,
		"name": "KNIT JOGGING PANTS",
		"category": "PANTS",
		"regularPrice": 174.99,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK"],
			"price": 174.99
		  },
		  {
			"looks": ["DOUBLE LOOK"],
			"price": 154.99
		  },
		  {
			"looks": ["TRIPLE LOOK", "FULL LOOK"],
			"price": 144.99
		  }
		]
	},
	{
		"id": 260,
		"name": "MENSWEAR PANTS",
		"category": "PANTS",
		"regularPrice": 59.98,
		"promotions": [
		  {
			"looks": ["SINGLE LOOK"],
			"price": 59.98
		  }
		]
	},
]

describe("Get Shopping Cart Development", () => {
	/*it("Listar produtos com base no ID", () => {
		const response = getProducts([120, 230, 310, 490], products);
		expect(response).toEqual(mock1)
	})

	it("Retornar SINGLE LOOK", () => {
		const response = selectPromotion(mock3);
		expect(response).toBe(0);
	})

	it("Retornar DOUBLE LOOK", () => {
		const response = selectPromotion(mock2);
		expect(response).toBe(1);
	})

	it("Retornar TRIPLE LOOK", () => {
		const response = selectPromotion(mock4);
		expect(response).toBe(2);
	})

	it("Retornar FULL LOOK", () => {
		const response = selectPromotion(mock1);
		expect(response).toBe(3);
	})

	it("Retornar o preço total sem descontos", () => {
		const response = getTotalPriceWithoutDiscount(mock1);
		expect(response).toBe(479.96)
	})*/

	it("Retornar o preço total sem descontos", () => {
		const response = getTotalPriceWithoutDiscount(mockDoubleLook);
		expect(response).toBe(529.95)
	})

	it("Retornar o preço total com descontos", () => {
		const response = getTotalPriceWithDiscount(mockDoubleLook, "DOUBLE LOOK");
		expect(response).toBe(504.95)
	})

	/*it("Retornar o preço total com descontos", () => {
		const response = getTotalPriceWithDiscount(mock1, "FULL LOOK");
		expect(response).toBe(404.96)
	})

	it("Retornar o desconto em porcentagem", () => {
		const response = calculePercentage(479.96, 75);
		expect(response).toBe(15.63);
	})*/

})