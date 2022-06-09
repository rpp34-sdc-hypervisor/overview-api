const Api = require('./api');
const request = require('supertest');


const baseUrl = 'localhost:27017/sdc';


describe('base endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
			.get('/');
		expect(response.statusCode).toBe(200);
	});
});

