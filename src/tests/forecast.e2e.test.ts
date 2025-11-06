import request from 'supertest';
import app from '../app';


const baseURL = "http://localhost:3000";

describe('GET /api/forecast', () => {


  it('should return 502 if lat/lon are missing', async () => {
    const res = await request(baseURL)
    .get("/api/forecast?lat=40.7128&lon=-74.0060")
    .expect(200);
  console.log(res.body);
  });

  it('should return 502 if lat/lon are invalid', async () => {
    const res = await request(baseURL)
    .get("/api/forecast?lat=abc&lon=xyz")
    .expect(502);
  });

  it('should return 502 if lat/lon are invalid', async () => {
    const res = await request(baseURL)
    .get("/api/forecast")
    .expect(502);


  });

});