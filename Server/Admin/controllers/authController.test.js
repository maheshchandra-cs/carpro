const React = require('react');
const request = require('supertest');
const App = require('../app');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig');
const axios = require('axios');

//npm run test -- --coverag

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

        test("Should not respond with 200 status code", async () => {
            const payload = {
                email: "customer1@gmail.com",
                name: "customer1",
                password: "customer1"
            }
            const response = await request(App)
            .post("/customer/auth/register")
            .set('x-access-token', token)
            .send(payload);
            expect(response.statusCode).toBe(404);
        });
    })
});












// const jwt = require('jsonwebtoken');
// const App = require('../app');
// const request = require('supertest');
// const authConfig = require('../config/authConfig');
// const axios = require('axios');

// describe("GET /", () => {
//     describe("Get the list of completed orders till date", () => {

//         const payload = { userId: '644a0c9169a02785046f0758' };
//         let token = jwt.sign(payload, authConfig.secretKey, { expiresIn: '1h' });
//         beforeAll((done) => { 
//             axios.post('https://carproapplication-auth.onrender.com/admin/auth/login', {
//                 email: 'admin@gmail.com',
//                 password: 'admin'
//             }).then(response => {
//                 token = response.body.token;
//                 done();
//             }).catch(error => {
//                 console.log(error.response.data.message);
//                 done();
//             });
//         });

//         test("Should respond with the number of orders", async () => {
//             let res = await axios.get('https://carproapplication-order.onrender.com/order/findCompltedOrders', {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });
//             expect(res.data.orders.length).not.toBeNull();
//         });
//     });
// });
