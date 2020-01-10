const app = require('../server');
const supertest = require('supertest');
const uuid = require('uuid/v4');

const request = supertest(app);

const mockRequestBody = {
  id: uuid(),
  message: 'vendo cama',
  author: 'lola'
};

test('gets the ads endpoint', async () => {
  const response = await request.get('/ads')
    .expect('Content-type', /json/)
    .expect(200)

  expect(response.body.length).toBe(2);
  expect(response.body[0].message).toBeTruthy();
  expect(response.body[0].author).toBeTruthy();
});

test('posts a new ad', async () => {

  const response = await request.post('/ads')
    .send(mockRequestBody)
    .set('Accept', 'application/json')
    .expect('Content-type', /json/)
    .expect(200)

  expect(response.body.id).toBeTruthy();
  expect(response.body.message).toBe(mockRequestBody.message);
  expect(response.body.author).toBe(mockRequestBody.author);

  const { body: newBody } = await request.get('/ads/' + response.body.id)
    .expect('Content-type', /json/)
    .expect(200)

  expect(newBody.id).toBeTruthy();
  expect(newBody.message).toBe(mockRequestBody.message);
  expect(newBody.author).toBe(mockRequestBody.author);
});

test('delete an ad', async () => {
  const mockResponseBody = { id: '1', message: "Vendo casa", author: "Papa" };

  const response = await request.delete('/ads/1')
    .expect('Content-type', /json/)
    .expect(200)

  expect(response.body).toEqual(mockResponseBody);
  
  await request.get('/ads/1')
    .expect(404)
});

test('when update ad then is effectively updated', async () => {
  const updatedAd = { id: '0', message: 'new message', author: 'new author' };

  await request.put('/ads/0')
    .send(updatedAd)
    .expect('Content-type', /json/)
    .expect(200)

  var { body } = await request.get('/ads/0')
    .expect('Content-type', /json/)
    .expect(200)

  expect(body).toEqual(updatedAd);

})