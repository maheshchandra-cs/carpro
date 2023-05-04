const React = require('react');
const request = require('supertest');
const App = require('../app');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig');
const axios = require('axios');

//npm run test -- --coverage

describe("GET /", () => {
    describe("Get the list of completed orders till date", () => {

        const payload = { userId: '644a0c9169a02785046f0758' };
        let token = jwt.sign(payload, authConfig.secretKey, { expiresIn: '1h' });
        beforeAll((done) => {
            request(App)
            .post('/admin/auth/login')
            .send({ email: 'admin@gmail.com', password: 'admin' })
            .end((err, res) => {
                token = res.body.token; // save the token for later use
                done();
            });  
        });

        test("Should respond with 200 status code", async () => {
            const response = await request(App)
            .get("/admin/mechanic/findAll")
            .set('x-access-token', token);
            expect(response.statusCode).toBe(200);
        });

        test("Should list the number of mechanic stores", async () => {
            const response = await request(App)
            .get("/admin/mechanic/findAll")
            .set('x-access-token', token);
            expect(response._body.response.length).not.toBeNull();
        });
    })
});