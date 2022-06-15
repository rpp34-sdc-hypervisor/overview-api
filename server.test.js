const Api = require('./server');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./server.js');

let dbLink = 'mongodb://localhost:27017/sdc';
let baseUrl = 'localhost:27017/sdc';
let APIUrl = 3013;

let sampleProductId = 10000;
let sampleProductIdText = '{"id":10000,"name":"Edmond Sunglasses","slogan":"Eos ratione tempora repellat reprehenderit dolorum.","description":"Ea nostrum aliquid odio id ratione consequatur nihil eum. Vitae et non. Quam modi quis temporibus autem voluptatem doloribus. Qui aut nesciunt earum. Ducimus et optio autem et.","category":"Sunglasses","default_price":"947","features":[{"feature":"Frame","value":"AllLight Composition Resin"}]}'

let sampleProductText = `[{"id":1,"name":"Camo Onesie","slogan":"Blend in to your crowd","description":"The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.","category":"Jackets","default_price":"140"},{"id":2,"name":"Bright Future Sunglasses","slogan":"You've got to wear shades","description":"Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.","category":"Accessories","default_price":"69"},{"id":3,"name":"Morning Joggers","slogan":"Make yourself a morning person","description":"Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.","category":"Pants","default_price":"40"},{"id":4,"name":"Slacker's Slacks","slogan":"Comfortable for everything, or nothing","description":"I'll tell you how great they are after I nap for a bit.","category":"Pants","default_price":"65"},{"id":5,"name":"Heir Force Ones","slogan":"A sneaker dynasty","description":"Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl","category":"Kicks","default_price":"99"}]`;
let sampleStylesIdText = '{"product_id":10000,"results":[{"style_id":19671,"name":"Magenta","original_price":"947","sale_price":null,"photos":[{"url":"https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80","thumbnail_url":"https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"},{"url":"https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80","thumbnail_url":"https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"},{"url":"https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1570&q=80","thumbnail_url":"https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"},{"url":"https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80","thumbnail_url":"https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}],"skus":[{"quantity":14,"size":"One Size"}]}]}'


// to perform tests, go to server.js and comment out mongoose.connect as well as app.listen



beforeAll(async () => {
	await mongoose.connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => console.log("Connected to MongoDB"))
		.catch((err) => console.log(err.message));
	// let test = await console.log('hi');
	// return test;
})

describe('base endpoint', () => {
	it('should return a 200 status code', async () => {
		let response = await request(baseUrl).get('/');
		expect(response.statusCode).toBe(200);
	});
});

describe('GET:/products endpoint', () => {
	it('Should return a 200 status code upon params id retrieval from database', async () => {
		let response = await request(app).get('/products').send();
		expect(response.statusCode).toBe(200);
	})
	it('Should return first page of Products upon GET request to /products', async () => {
		let response = await request(app).get('/products').send();
		expect(response.text).toBe(sampleProductText);
	})
})

describe('GET:/products/:id endpoint', () => {
		it('Should return specified product id data from database', async () => {
		let response = await request(app).get(`/products/${sampleProductId}`).send()
		expect(response.text).toBe(sampleProductIdText)
	})
})

describe('GET:/products/:id/styles endpoint', () => {
	it('Should return specified product id styles data from database', async () => {
	let response = await request(app).get(`/products/${sampleProductId}/styles`).send()
	expect(response.text).toBe(sampleStylesIdText)
})
})

afterAll(async () => {
  await mongoose.connection.close()
	// let test = await console.log('bye');
	// return test;
})



