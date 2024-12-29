const request = require('supertest'); // For making HTTP requests to the server
const app = require('../server'); // Import your Express app

describe('GET /recipes', () => {
  it('should return all recipes', (done) => {
    request(app)
      .get('/recipes') // The endpoint to test
      .expect(200) // The expected HTTP status code
      .expect('Content-Type', /json/) // The expected content type
      .end((err, res) => {
        if (err) return done(err);
        // You can add more assertions to check the response body if needed
        // For example, check if the response body is an array
        if (Array.isArray(res.body)) {
          done();
        } else {
          done(new Error('Response body is not an array'));
        }
      });
  });
});
